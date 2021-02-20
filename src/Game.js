import { INVALID_MOVE } from "boardgame.io/core";
import Bot from "./Bot";
import InnerTiles from "./InnerTiles";
import MiddleTiles from "./MiddleTiles";
import OuterTiles from "./OuterTiles";
import Species from "./Species";
import StartingTiles, { GalacticCenter } from "./StartingTiles";
import TechTiles from "./TechTiles";


const sectorDistance = (s1, s2) => {
  const a = s1.pos;
  const b = s2.pos;
  return (Math.abs(a.q - b.q) + Math.abs(a.r - b.r) + Math.abs(a.s - b.s)) / 2
}

const generateSector = (q, r) => {
  let s = -q - r;
  let sector = {
    pos: { q, r, s },
  };

  let d = sectorDistance(sector, { pos: { q: 0, r: 0, s: 0 } });
  sector.ring = Math.min(d, 3);
  sector.tile = null;

  return sector;
}

const isPos = (sector, q, r, s) => sector.pos.q === q && sector.pos.r === r && sector.pos.s === s;

const placeTile = (map, tiles, tileId, { q, r, s }) => {
  let sector = map.find(sector => isPos(sector, q, r, s));

  let desiredTile = tiles.find(t => t.id === tileId);

  if (desiredTile.placed) {
    console.error("Tile already placed:", tileId);
    return false;
  }

  if (sector && desiredTile) {
    sector.tile = desiredTile;
    desiredTile.placed = true;
  } else {
    console.warn("Sector/Tile not found: ", tileId, { q, r, s });
  }
  //sector.tile.pos ?
  return sector.tile !== null;
}

const placeInfluence = (map, tileId, player) => {
  //TODO decrement from player board?
  let sector = map.find(sector => sector.tile && sector.tile.id === tileId);
  if (sector) {
    sector.tile.influence = player;
  } else {
    throw Error("No such sector tile");
  }
}

const getSector = (G, { q, r, s }) => G.sectors.find(sector => isPos(sector, q, r, s));

const getNeighbors = (G, sector) => {
  const neighbors = [];
  const { q, r, s } = sector.pos;
  const neighborCoords = [
    { q: q - 0, r: r + 1, s: s - 1 }, //toq
    { q: q + 1, r: r - 0, s: s - 1 }, //tr
    { q: q + 1, r: r - 1, s: s - 0 }, //br
    { q: q - 0, r: r - 1, s: s + 1 }, //bot
    { q: q - 1, r: r - 0, s: s + 1 }, //bl
    { q: q - 1, r: r + 1, s: s - 0 }, //tl
  ];
  neighborCoords.forEach(n => {
    const potentialSector = getSector(G, n);
    if (potentialSector) {
      neighbors.push(potentialSector);
    }
  });

  return neighbors;
};

const findAvailableSectors = (G, ctx) => {
  const sectors = G.sectors.filter(s => s.tile && s.tile.influence === ctx.currentPlayer);
  const validSectors = [];
  sectors.forEach(s => {
    const neighbors = getNeighbors(G, s);
    validSectors.splice(0, 0, ...neighbors.filter(n => !n.tile));
  });

  return validSectors;
};

const PickUnplacedTile = (tiles) => {
  const unplacedTiles = tiles.filter(t => !t.placed);
  let tile = null;

  if (unplacedTiles.length === 0) {
    return null;
  } else {
    tile = unplacedTiles[randomInteger(0, unplacedTiles.length)];
  }

  return tile;
}

const addExplorableSectors = (G, pos) => {
  const maybeSectors = generateRing3Sectors(pos);
  const validSectors = maybeSectors.filter(sector => !getSector(G, sector.pos));
  if (validSectors.length > 0) {
    G.sectors.push(...validSectors);
  }
}

/** Choose a sector next to one of your ships, or influenced sectors, pick a tile for that sector's "ring".
 * Choose to place or discard (if you don't like it).
 * Wormholes must line up (unless you have that special wormhole tech).
 * Put aliens/discovery stuff on it.
 * May take control by placing influence.
 * May activate colony ships after placing influence.
 */
const Explore = (G, ctx) => {
  const validSectors = findAvailableSectors(G, ctx);
  if (validSectors.length === 0) {
    return INVALID_MOVE;
  } else {
    const theSector = validSectors[randomInteger(0, validSectors.length - 1)];
    const pos = theSector.pos;

    switch (theSector.ring) {
      case 1: {
        const tile = PickUnplacedTile(G.tiles.inner);
        if (!tile) {
          return INVALID_MOVE;
        }
        placeTile(G.sectors, G.tiles.inner, tile.id, pos);
        break;
      }

      case 2: {
        const tile = PickUnplacedTile(G.tiles.middle);
        if (!tile) {
          return INVALID_MOVE;
        }
        placeTile(G.sectors, G.tiles.middle, tile.id, pos);
        addExplorableSectors(G, pos);
        break;
      }

      default:
      case 3: {
        const tile = PickUnplacedTile(G.tiles.outer);
        if (!tile) {
          return INVALID_MOVE;
        }
        placeTile(G.sectors, G.tiles.outer, tile.id, pos);
        addExplorableSectors(G, pos);
        break;
      }
    }
  }
};

/** Trade 2x `from` type for 1x `to` type.
 * Trade can happen "at any time" (?).
 * Will probably want to limit this so the bot isn't wasting everyone's time.
 */
const Trade = (G, ctx, from, to) => {
  if (G.data[ctx.currentPlayer][from] >= 2) { //TODO trade ratio
    G.data[ctx.currentPlayer][from] -= 2;
    G.data[ctx.currentPlayer][to] += 1;
  } else {
    return INVALID_MOVE;
  }
};

const generateRing3Sectors = ({ q, r, s }) => [
  generateSector(q, r - 1),
  generateSector(q + 1, r - 1),
  generateSector(q + 1, r),
  generateSector(q, r + 1),
  generateSector(q - 1, r + 1),
  generateSector(q - 1, r),
].filter(s => s.ring === 3);

/**
 * Each player chooses a starting hex (and playerboard),
 * and places the hex in the spot closes to them.
 * @param {number} numPlayers 
 */
const generateMap = (numPlayers, tiles) => {
  let map = [
    //Galactive Center 
    generateSector(0, 0),

    //Inner Sectors
    generateSector(0, -1),
    generateSector(1, -1),
    generateSector(1, 0),
    generateSector(0, 1),
    generateSector(-1, 1),
    generateSector(-1, 0),

    //Middle Sectors
    generateSector(0, -2),
    generateSector(1, -2),
    generateSector(2, -2),
    generateSector(2, -1),
    generateSector(2, 0),
    generateSector(1, 1),
    generateSector(0, 2),
    generateSector(-1, 2),
    generateSector(-2, 2),
    generateSector(-2, 1),
    generateSector(-2, 0),
    generateSector(-1, -1),

    //Outer Sectors (in play determined by num players)
    //...
  ];

  const gcSector = map.find(sector => isPos(sector, 0, 0, 0));
  gcSector.tile = tiles.center;

  switch (numPlayers) {
    default:
      throw new Error("Invalid numPlayers");
    case 2: {
      const startingCoords = [
        { q: 0, r: -2, s: 2 },
        { q: 0, r: 2, s: -2 }
      ];

      placeTile(map, tiles.starting, '221', startingCoords[0]);
      placeInfluence(map, '221', "0");
      placeTile(map, tiles.starting, '222', startingCoords[1]);
      placeInfluence(map, '222', "1");

      map.push(...generateRing3Sectors(startingCoords[0]));
      map.push(...generateRing3Sectors(startingCoords[1]));
      break;
    }

    case 3: {
      const startingCoords = [
        { q: 0, r: -2, s: 2 },
        { q: 2, r: 0, s: -2 },
        { q: -2, r: 2, s: 0 },
      ];

      //TODO influence for 3+ players
      placeTile(map, tiles.starting, '221', startingCoords[0]);
      placeTile(map, tiles.starting, '222', startingCoords[1]);
      placeTile(map, tiles.starting, '223', startingCoords[2]);

      map.push(...generateRing3Sectors(startingCoords[0]));
      map.push(...generateRing3Sectors(startingCoords[1]));
      map.push(...generateRing3Sectors(startingCoords[2]));
      break;
    }

    case 4: {
      const startingCoords = [
        { q: -2, r: 0, s: 2 }, { q: 2, r: -2, s: 0 }, { q: 2, r: 0, s: -2 }, { q: -2, r: 2, s: 0 }
      ];
      placeTile(map, tiles.starting, '221', startingCoords[0]);
      placeTile(map, tiles.starting, '222', startingCoords[1]);
      placeTile(map, tiles.starting, '223', startingCoords[2]);
      placeTile(map, tiles.starting, '224', startingCoords[3]);

      map.push(...generateRing3Sectors(startingCoords[0]));
      map.push(...generateRing3Sectors(startingCoords[1]));
      map.push(...generateRing3Sectors(startingCoords[2]));
      map.push(...generateRing3Sectors(startingCoords[3]));
      break;
    }

    case 5: {
      const startingCoords = [
        { q: -2, r: 0, s: 2 }, { q: 2, r: -2, s: 0 }, { q: 2, r: 0, s: -2 }, { q: -2, r: 2, s: 0 }, { q: 0, r: -2, s: 2 },
      ];

      placeTile(map, tiles.starting, '221', startingCoords[0]);
      placeTile(map, tiles.starting, '222', startingCoords[1]);
      placeTile(map, tiles.starting, '223', startingCoords[2]);
      placeTile(map, tiles.starting, '224', startingCoords[3]);
      placeTile(map, tiles.starting, '225', startingCoords[4]);

      map.push(...generateRing3Sectors(startingCoords[0]));
      map.push(...generateRing3Sectors(startingCoords[1]));
      map.push(...generateRing3Sectors(startingCoords[2]));
      map.push(...generateRing3Sectors(startingCoords[3]));
      map.push(...generateRing3Sectors(startingCoords[4]));
      break;
    }

    case 6: {
      const startingCoords = [
        { q: -2, r: 0, s: 2 }, { q: 2, r: -2, s: 0 }, { q: 2, r: 0, s: -2 }, { q: -2, r: 2, s: 0 }, { q: 0, r: -2, s: 2 }, { q: 0, r: 2, s: -2 }
      ];

      placeTile(map, tiles.starting, '221', startingCoords[0]);
      placeTile(map, tiles.starting, '222', startingCoords[1]);
      placeTile(map, tiles.starting, '223', startingCoords[2]);
      placeTile(map, tiles.starting, '224', startingCoords[3]);
      placeTile(map, tiles.starting, '225', startingCoords[4]);
      placeTile(map, tiles.starting, '226', startingCoords[5]);

      map.push(...generateRing3Sectors(startingCoords[0]));
      map.push(...generateRing3Sectors(startingCoords[1]));
      map.push(...generateRing3Sectors(startingCoords[2]));
      map.push(...generateRing3Sectors(startingCoords[3]));
      map.push(...generateRing3Sectors(startingCoords[4]));
      map.push(...generateRing3Sectors(startingCoords[5]));
      break;
    }
  }

  //TODO TEMP
  //placeTile(map, tiles.inner, '104', {q: 0, r: -1, s: 1});

  return map;
};

const createPlayerData = (numPlayers) => {
  let d = {};
  for (let i = 0; i < numPlayers; ++i) {
    d[i] = {
      vp: 0,
      money: 3,
      science: 3,
      materials: 3,
      influence: 13,
      production: {
        money: 0,
        science: 0,
        materials: 0,
      },
      species: null,
      hasPassed: false,
      shipsAvailableForCombat: 0,
      maxInfluence: 13,
    };
  }

  return d;
};

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const pickSomeMoreTiles = (tiles, numPlayers) => {
  if (numPlayers >= 2 && numPlayers <= 6) {
    let availableTiles = tiles.filter(t => t.bag >= 1);
    const neededTiles = (2 * numPlayers + 8);
    let numPickedTiles = 0;

    while ((numPickedTiles < neededTiles) || availableTiles.length === 0) {
      //Find a tile in the available tiles array
      const i = randomInteger(0, availableTiles.length - 1);
      const tile = availableTiles[i];

      //Find tile on the OG array, so we can modify it
      const realTile = tiles.find(t => t.name === tile.name);
      realTile.bag -= 1;
      realTile.supply += 1;
      numPickedTiles += 1;

      //Recount available tiles
      availableTiles = tiles.filter(t => t.bag >= 1);
    }

    return tiles;
  } else {
    throw new Error('Invalid numPlayers for outer tiles');
  }
};

const PickBoard = (G, ctx, speciesName) => {
  const species = Species();
  const theSpecies = species.find(s => s.name === speciesName);
  if (!theSpecies) {
    return INVALID_MOVE;
  }

  if (!G.data[ctx.currentPlayer].species) {
    G.data[ctx.currentPlayer].species = theSpecies.name;
    //TODO Remove picked species from list for next player
    //TODO Remove pair from list to emulate physical game
  } else {
    return INVALID_MOVE;
  }

  ctx.events.endTurn();
};

export const Umbra = {
  name: 'Umbra',
  setup: (ctx) => {
    const tiles = {
      center: GalacticCenter(),
      inner: InnerTiles(),
      starting: StartingTiles(),
      middle: MiddleTiles(),
      outer: OuterTiles()
    };

    const techTiles = pickSomeMoreTiles(TechTiles(), ctx.numPlayers);

    //Sectors can be empty, or have a tile
    return {
      species: Species(),
      tiles,
      sectors: generateMap(ctx.numPlayers, tiles),
      techTiles,
      maxRounds: 9,
      currentRound: 1,
      data: createPlayerData(ctx.numPlayers)
    };
  },
  minPlayers: 2,
  maxPlayers: 6,
  phases: {
    pick: {
      start: true,
      moves: {
        pickBoard: PickBoard
      },
      endIf: (G, ctx) => Object.values(G.data).every(p => p.species !== null),
      next: 'action'
    },
    action: {
      //start: true,
      moves: {
        explore: Explore,
        trade: Trade,
        pass: (G, ctx) => {
          G.data[ctx.currentPlayer].hasPassed = true;
          ctx.events.endTurn();
        }
      },
      endIf: G => Object.values(G.data).every(p => p.hasPassed),
      onEnd: (G, ctx) => (Object.values(G.data).forEach(p => p.hasPassed = false), G),
      next: 'combat'
    },
    combat: {
      moves: {
        trade: Trade,
        engage: (G, ctx) => {
          ctx.events.endTurn();
        },
        retreat: (G, ctx, shipType, hex) => { }
      },
      endIf: G => Object.values(G.data).every(p => p.shipsAvailableForCombat === 0),
      next: 'upkeep'
    },
    upkeep: {
      moves: {
        trade: Trade,
        activeColonyShip: () => { },
        pass: (G, ctx) => {
          G.data[ctx.currentPlayer].hasPassed = true;
          ctx.events.endTurn();
        }
      },
      endIf: G => Object.values(G.data).every(p => p.hasPassed),
      onEnd: (G, ctx) => (Object.values(G.data).forEach(p => p.hasPassed = false), G.currentRound += 1, G),
      next: 'action'
    }
  },
  endIf: (G, ctx) => {
    if (G.currentRound > G.maxRounds) {
      return { winner: 'whoever has the most points' };
    }
  },
  ai: {
    enumerate: Bot
  },
};

/**
 * players <=6
 * do nothing option to end turn
 * phases: action, combat, upkeep, cleanup
 *
 * actions:
 * explore, influence, research, upgrade, build, move
 * need to prioritize that ^
 */
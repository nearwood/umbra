import { INVALID_MOVE } from "boardgame.io/core";
import Bot from "./Bot";
import InnerTiles from "./InnerTiles";
import StartingTiles, { GalacticCenter } from "./StartingTiles";
import TechTiles from "./TechTiles";

const resetHasPassed = (numPlayers, obj) => {
  const o = obj || {};

  for (let i = 0; i < numPlayers; ++i) {
    o[i] = false;
  }

  return o;
}


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

const placeTile = (map, tiles, tileId, [q, r, s]) => {
  let sector = map.find(sector => isPos(sector, q, r, s));

  let desiredTile = tiles.find(t => t.id === tileId);
  // if !desireTile, search innerTiles, outerTiles...

  if (sector && desiredTile) {
    sector.tile = desiredTile;
  } else {
    console.warn("Sector/Tile not found: ", tileId, [q, r, s]);
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
    case 2:
      placeTile(map, tiles.starting, '221', [0, -2, 2]);
      placeInfluence(map, '221', "0");
      placeTile(map, tiles.starting, '222', [0, 2, -2]);
      placeInfluence(map, '222', "1");
      break;
    case 3:
      placeTile(map, tiles.starting, '221', [0, -2, 2]);
      placeTile(map, tiles.starting, '222', [2, 0, -2]);
      placeTile(map, tiles.starting, '223', [-2, 2, 0]);
      break;
    case 4:
      placeTile(map, tiles.starting, '221', [-2, 0, 2]);
      placeTile(map, tiles.starting, '222', [2, -2, 0]);
      placeTile(map, tiles.starting, '223', [2, 0, -2]);
      placeTile(map, tiles.starting, '224', [-2, 2, 0]);
      break;
    case 5:
      placeTile(map, tiles.starting, '221', [-2, 0, 2]);
      placeTile(map, tiles.starting, '222', [2, -2, 0]);
      placeTile(map, tiles.starting, '223', [2, 0, -2]);
      placeTile(map, tiles.starting, '224', [-2, 2, 0]);
      placeTile(map, tiles.starting, '225', [0, -2, 2]);
      break;
    case 6:
      placeTile(map, tiles.starting, '221', [-2, 0, 2]);
      placeTile(map, tiles.starting, '222', [2, -2, 0]);
      placeTile(map, tiles.starting, '223', [2, 0, -2]);
      placeTile(map, tiles.starting, '224', [-2, 2, 0]);
      placeTile(map, tiles.starting, '225', [0, -2, 2]);
      placeTile(map, tiles.starting, '226', [0, 2, -2]);
      break;
  }

  //TODO TEMP
  placeTile(map, tiles.inner, '104', [0, -1, 1]);

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
      }
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

export const Umbra = {
  name: 'Umbra',
  setup: (ctx) => {
    const tiles = {
      center: GalacticCenter(),
      inner: InnerTiles(),
      starting: StartingTiles(),
      middle: [],
      outer: []
    };

    const techTiles = pickSomeMoreTiles(TechTiles(), ctx.numPlayers);

    //Sectors can be empty, or have a tile
    return {
      tiles,
      sectors: generateMap(ctx.numPlayers, tiles), //TODO will need phase to pick race
      techTiles,
      maxRounds: 9,
      currentRound: 1,
      data: createPlayerData(ctx.numPlayers),
      hasPassed: resetHasPassed(ctx.numPlayers), //TODO integrate into data
      shipsAvailableForCombat: 0, //TODO integrate into data
      maxInfluence: 13, //TODO integrate into data
    };
  },
  minPlayers: 2,
  maxPlayers: 6,
  phases: {
    action: {
      start: true,
      moves: {
        trade: Trade,
        pass: (G, ctx) => {
          G.hasPassed[ctx.currentPlayer] = true;
          ctx.events.endTurn();
        }
      },
      endIf: G => Object.values(G.hasPassed).every(p => p),
      onEnd: (G, ctx) => (resetHasPassed(ctx.numPlayers, G.hasPassed), G),
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
      endIf: G => G.shipsAvailableForCombat === 0,
      next: 'upkeep'
    },
    upkeep: {
      moves: {
        trade: Trade,
        activeColonyShip: () => { },
        pass: (G, ctx) => {
          G.hasPassed[ctx.currentPlayer] = true;
          ctx.events.endTurn();
        }
      },
      endIf: G => Object.values(G.hasPassed).every(p => p),
      onEnd: (G, ctx) => (resetHasPassed(ctx.numPlayers, G.hasPassed), G.currentRound += 1, G),
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
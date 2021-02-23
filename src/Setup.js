import InnerTiles from "./InnerTiles";
import MiddleTiles from "./MiddleTiles";
import OuterTiles from "./OuterTiles";
import ShipParts from "./ShipParts";
import StartingTiles, { GalacticCenter } from "./StartingTiles";
import TechTiles from "./TechTiles";
import { randomInteger, isPos, placeTile, generateSector, generateRing3Sectors } from './utils';
import Species from "./Species";


const placeInfluence = (map, tileId, player) => {
  //TODO decrement from player board?
  let sector = map.find(sector => sector.tile && sector.tile.id === tileId);
  if (sector) {
    sector.tile.influence = player;
  } else {
    throw Error("No such sector tile");
  }
}


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
      money: 0,
      science: 0,
      materials: 0,
      influence: 13,
      spentInfluence: {
        explore: 0,
        influence: 0,
        research: 0,
        upgrade: 0,
        build: 0,
        move: 0,
      },
      production: {
        money: 2,
        science: 2,
        materials: 2,
      },
      research: {
        money: [], //grid
        science: [], //nano
        materials: [], //military
      },
      species: null,
      hasPassed: false,
      shipsAvailableForCombat: 0,
      maxInfluence: 13,
    };
  }

  return d;
};

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

const Setup = (ctx) => {
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
    parts: ShipParts(),
    maxRounds: 9,
    currentRound: 1,
    data: createPlayerData(ctx.numPlayers)
  };
};

export default Setup;

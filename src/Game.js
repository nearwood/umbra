import { INVALID_MOVE } from "boardgame.io/core";
import { GalacticCenter, StartingSectors } from "./sectors";

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

  let d = sectorDistance(sector, GalacticCenter);
  sector.ring = Math.min(d, 3);
  sector.tile = null;

  return sector;
}

const isPos = (sector, q, r, s) => sector.pos.q === q && sector.pos.r === r && sector.pos.s === s;

const placeTile = (map, tileId, [q, r, s]) => {
  let sector = map.find(sector => isPos(sector, q, r, s));

  let desiredTile = StartingSectors.find(t => t.id === tileId);
  // if !desireTile, search innerTiles, outerTiles...

  if (sector && desiredTile) {
    sector.tile = desiredTile;
  } else {
    console.warn("Sector/Tile not found: ", tileId, [q, r, s]);
  }
  //sector.tile.pos ?
  return sector?.tile !== null;
}

//Uncaught TypeError: "tile" is read-only
// const EmptyMap = [
//   generateSector(0, 0),

//   //Inner Sectors
//   generateSector(0, -1),
//   generateSector(1, -1),
//   generateSector(1, 0),
//   generateSector(0, 1),
//   generateSector(-1, 1),
//   generateSector(-1, 0),

//   //Middle Sectors
//   generateSector(0, -2),
//   generateSector(1, -2),
//   generateSector(2, -2),
//   generateSector(2, -1),
//   generateSector(2, 0),
//   generateSector(1, 1),
//   generateSector(0, 2),
//   generateSector(-1, 2),
//   generateSector(-2, 2),
//   generateSector(-2, 1),
//   generateSector(-2, 0),
//   generateSector(-1, -1),

//   //Outer Sectors (in play determined by num players)
//   //...
// ];

/**
 * Each player chooses a starting hex (and playerboard),
 * and places the hex in the spot closes to them.
 * @param {number} numPlayers 
 */
const generateMap = (numPlayers) => {
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
  gcSector.tile = GalacticCenter;

  switch (numPlayers) {
    default:
      throw new Error("Invalid numPlayers");
    case 1: //eg. AI?
    case 2:
      placeTile(map, '221', [0, -2, 2]);
      placeTile(map, '222', [0, 2, -2]);
      break;
    case 3:
      placeTile(map, '221', [0, -2, 2]);
      placeTile(map, '222', [2, 0, -2]);
      placeTile(map, '223', [-2, 2, 0]);
      break;
    case 4:
      placeTile(map, '221', [-2, 0, 2]);
      placeTile(map, '222', [2, -2, 0]);
      placeTile(map, '223', [2, 0, -2]);
      placeTile(map, '224', [-2, 2, 0]);
      break;
    case 5:
      placeTile(map, '221', [-2, 0, 2]);
      placeTile(map, '222', [2, -2, 0]);
      placeTile(map, '223', [2, 0, -2]);
      placeTile(map, '224', [-2, 2, 0]);
      placeTile(map, '225', [0, -2, 2]);
      break;
    case 6:
      placeTile(map, '221', [-2, 0, 2]);
      placeTile(map, '222', [2, -2, 0]);
      placeTile(map, '223', [2, 0, -2]);
      placeTile(map, '224', [-2, 2, 0]);
      placeTile(map, '225', [0, -2, 2]);
      placeTile(map, '226', [0, 2, -2]);
      break;
  }

  return map;
};

const createPlayerData = (numPlayers) => {
  let d = {};
  for (let i = 0; i < numPlayers; ++i) {
    d[i] = {
      money: 0,
      science: 0,
      materials: 0
    };
  }

  return d;
};

export const Umbra = {
  name: 'Umbra',
  setup: (ctx) => ({
    map: generateMap(ctx.numPlayers), //TODO will need phase to pick race
    maxRounds: 9,
    currentRound: 1,
    data: createPlayerData(ctx.numPlayers),
    hasPassed: resetHasPassed(ctx.numPlayers),
    shipsAvailableForCombat: 0
  }),
  minPlayers: 1,
  maxPlayers: 6,
  moves: {
    /** Trade 2x `from` type for 1x `to` type.
     * Trade can happen "at any time" (?).
     * Will probably want to limit this so the bot isn't wasting everyone's time.
    */
    trade: (G, ctx, from, to) => {
      if (G.resources[ctx.currentPlayer][from]) {
        G.resources[ctx.currentPlayer][from] -= 2;
        G.resources[ctx.currentPlayer][to] += 1;
      } else {
        return INVALID_MOVE;
      }
    }
  },
  phases: {
    action: {
      start: true,
      moves: {
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
    enumerate: (G, ctx) => {
      let moves = [];
      switch (ctx.phase) {
        case 'action':
          moves.push({ move: 'pass' });
          break;

        case 'combat':
          moves.push({ move: 'engage' });
          break;

        case 'upkeep':
          moves.push({ move: 'pass' });
          break;

        default:
          break;
      }

      return moves;
    },
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
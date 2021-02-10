
const resetHasPassed = (numPlayers, obj) => {
  const o = obj || {};

  for (let i = 0; i < numPlayers; ++i) {
    o[i] = false;
  }

  return o;
}

const generateSector = (q, r) => {
  let s = q - r;
  return {
    pos: { q, r, s }
  };
}

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
];

let galacticCenter = { pos: { q: 0, r: 0, s: 0 } }

export const Umbra = {
  setup: (ctx) => ({ map, maxRounds: 9, currentRound: 1, hasPassed: resetHasPassed(ctx.numPlayers), shipsAvailableForCombat: 0 }),

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
  }
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
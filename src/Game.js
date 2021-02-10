
const resetHasPassed = (numPlayers, obj) => {
  const o = obj || {};

  for (let i = 0; i < numPlayers; ++i) {
    o[i] = false;
  }

  return o;
}

export const Umbra = {
  setup: (ctx) => ({ maxRounds: 9, currentRound: 1, hasPassed: resetHasPassed(ctx.numPlayers), shipsAvailableForCombat: 0 }),

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
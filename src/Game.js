import Setup from './Setup';
import * as Moves from './moves';
import Bot from "./Bot";


export const Umbra = {
  name: 'Umbra',
  setup: Setup,
  minPlayers: 2,
  maxPlayers: 6,
  phases: {
    pick: {
      start: true,
      moves: {
        pickBoard: Moves.PickBoard
      },
      endIf: (G, ctx) => Object.values(G.data).every(p => p.species !== null),
      next: 'action'
    },
    action: {
      //start: true,
      moves: {
        explore: Moves.Explore,
        trade: Moves.Trade,
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
        trade: Moves.Trade,
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
        trade: Moves.Trade,
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

import Setup from './Setup';
import * as Moves from './moves';
import Bot from "./Bot";
import { UpkeepMap, ProductionMap } from './PlayerBoard';

/** Pay upkeep amounts (money), produce resources (money, science, materials) */
const upkeep = (G, ctx) => {
  Object.values(G.data).forEach(player => {
    const upkeepDue = UpkeepMap[player.influence];
    player.money += -upkeepDue + player.production.money;

    //TODO If negative, bankrupt procedures
    player.money = Math.max(player.money, 0);

    player.materials += player.production.materials;
    player.science += player.production.science;

    Object.keys(player.spentInfluence).forEach(key => {
      const spent = player.spentInfluence[key];
      if (key !== 'influence') {
        player.influence += spent;
      }
      player.spentInfluence[key] = 0;
    });
  });
};

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
      onBegin: upkeep,
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

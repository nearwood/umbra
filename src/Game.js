import Setup from './Setup';
import * as Moves from './moves';
import Bot from "./Bot";


export const UpkeepMap = {
  '1': 30,
  '2': 25,
  '3': 21,
  '4': 17,
  '5': 13,
  '6': 10,
  '7': 7,
  '8': 5,
  '9': 3,
  '10': 2,
  '11': 1,
  '12': 0,
  '13': 0,
};

export const ProductionMap = {
  '1': 28,
  '2': 24,
  '3': 21,
  '4': 18,
  '5': 15,
  '6': 12,
  '7': 10,
  '8': 8,
  '9': 6,
  '10': 4,
  '11': 3,
  '12': 2, //instructions have misprint, there are 12 total
};

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

/** Draw new tech tiles according to # of players.
 * Then, each player:
 *  - Moves influence discs from action track back to influence track.
 *  - Moves any cubes from graveyards to population tracks.
 *  - If population tracks are full, move to another track.
 *  - Resets colony ships.
 * 
 * New round begins.
 */
const cleanup = (G, ctx) => {
  Object.values(G.data).forEach(player => {
    player.colonyShips.forEach(ship => ship.deployed = false);
    player.hasPassed = false;
  });

  G.currentRound += 1;
  //return G;
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
        beginResearch: Moves.beginResearch,
        research: Moves.Research,
        endResearch: Moves.endResearch,
        trade: Moves.Trade,
        colonize: Moves.Colonize,
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
        colonize: Moves.Colonize, //same as in action phase, with one caveat
        pass: (G, ctx) => {
          G.data[ctx.currentPlayer].hasPassed = true;
          ctx.events.endTurn();
        }
      },
      endIf: G => Object.values(G.data).every(p => p.hasPassed),
      onEnd: cleanup,
      next: 'action'
    }
  },
  endIf: (G, ctx) => {
    if (G.currentRound > G.maxRounds) {
      return { winner: 'whomever has the most points' };
    }
  },
  ai: {
    enumerate: Bot
  },
};

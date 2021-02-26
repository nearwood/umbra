import { INVALID_MOVE } from "boardgame.io/core";

export const beginResearch = (G, ctx) => {
  const player = G.data[ctx.currentPlayer];

  //TODO Check that you can actually afford anything

  player.influence -= 1;
  player.spentInfluence.research += 1;
  G.researchEnabled = true;
};

export const endResearch = (G, ctx) => {
  G.researchEnabled = false;
};

const playerHasTile = (player, tile) => player.research[tile.category].some(t => t.name === tile.name);

export const researchEnabled = (G, ctx, tile) => {
  const player = G.data[ctx.currentPlayer];

  return G.researchEnabled && tile.supply > 0 && player.science >= tile.cost && !playerHasTile(player, tile);
}

/** Choose one available tech, pay the science, put on player board.
 * Update discount
 * Apply any effect
 */
const Research = (G, ctx, techName) => {
  const player = G.data[ctx.currentPlayer];
  if (player.influence <= 0) {
    return INVALID_MOVE;
  }

  const tech = G.techTiles.find(tile => tile.name === techName);

  if (!tech) {
    console.error(`Invalid tech: ${techName}`);
    return INVALID_MOVE;
  }

  if (tech.supply <= 0) {
    console.error(`Tech "${techName}" has no supply`);
    return INVALID_MOVE;
  }

  if (playerHasTile(player, tech)) {
    console.error(`Player already has tech: ${techName}`);
    return INVALID_MOVE;
  }

  //TODO disable research after n number of tiles... how to reset?

  //TODO discount
  player.science -= tech.cost;
  tech.supply -= 1;
  player.research[tech.category].push(tech);
  G.researchEnabled = false;
};

export default Research;

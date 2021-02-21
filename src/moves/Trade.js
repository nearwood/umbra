import { INVALID_MOVE } from "boardgame.io/core";


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

export default Trade;
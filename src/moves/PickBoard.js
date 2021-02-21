import { INVALID_MOVE } from "boardgame.io/core";
import Species from "../Species";


const PickBoard = (G, ctx, speciesName) => {
  const species = Species();
  const player = G.data[ctx.currentPlayer];

  //To unselect a board
  // if (!speciesName && player.species) {
  //   player.species = null;
  //   return;
  // }

  //Check that species exists
  const theSpecies = species.find(s => s.name === speciesName);
  if (!theSpecies) {
    return INVALID_MOVE;
  }

  //Check that species isn't already picked
  if (!player.species) {
    player.species = theSpecies.name;
    //TODO Remove picked species from list for next player
    //TODO Remove pair from list to emulate physical game
  } else {
    return INVALID_MOVE;
  }

  ctx.events.endTurn();
};

export default PickBoard;

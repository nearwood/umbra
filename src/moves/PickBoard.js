import { INVALID_MOVE } from "boardgame.io/core";
import Species from "../Species";

const applyStartingTech = (G, player, species) => {
  player.colonyShips = [];
  for (let i = 1; i <= species.colonyShips; ++i) {
    player.colonyShips.push({ index: i, deployed: false });
  }

  //player.maxInfluence = species.maxInfluence;

  species.startingTech.forEach(techName => {
    //Find the technology, get its type, apply to the matching player's track
    const tile = G.techTiles.find(tile => tile.name === techName);
    if (!tile) {
      throw new Error(`Could not find tech tile: ${techName}`);
    }

    player.research[tile.category].push(tile);
  });

  Object.keys(species.startingResources).forEach(key => {
    player[key] = species.startingResources[key];
  });
};

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
    applyStartingTech(G, player, theSpecies);
    //TODO Remove picked species from list for next player
    //TODO Remove pair from list to emulate physical game
  } else {
    return INVALID_MOVE;
  }

  ctx.events.endTurn();
};

export default PickBoard;

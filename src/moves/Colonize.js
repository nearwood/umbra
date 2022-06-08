import { INVALID_MOVE } from "boardgame.io/core";


/** Colonize can happen "at any time" (?).
 * Will probably want to limit this so the bot isn't wasting everyone's time.
 * Has to be planet influenced, no enemy ships?
 * Need to pick which production
 */
const Colonize = (G, ctx, tileId, planetId) => {
  const ship = G.data[ctx.currentPlayer].colonyShips.find(ship => !ship.deployed);
  const tile = G.sectors.find(s => s.tile && s.tile.id === tileId).tile;
  const planet = tile.planets[planetId];

  if (ship && planet && !planet.colonized) {
    planet.colonized = true;
    ship.deployed = true;
  } else {
    return INVALID_MOVE;
  }
};

export default Colonize;
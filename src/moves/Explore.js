import { INVALID_MOVE } from "boardgame.io/core";
import { randomInteger, isPos, generateRing3Sectors, placeTile } from '../utils';

/** Get the sector at `{q, r, s}` */
const getSector = (G, { q, r, s }) => G.sectors.find(sector => isPos(sector, q, r, s));

/** Get the sectors that surround a given sector */
const getNeighbors = (G, sector) => {
  const neighbors = [];
  const { q, r, s } = sector.pos;
  const neighborCoords = [
    { q: q - 0, r: r + 1, s: s - 1 }, //toq
    { q: q + 1, r: r - 0, s: s - 1 }, //tr
    { q: q + 1, r: r - 1, s: s - 0 }, //br
    { q: q - 0, r: r - 1, s: s + 1 }, //bot
    { q: q - 1, r: r - 0, s: s + 1 }, //bl
    { q: q - 1, r: r + 1, s: s - 0 }, //tl
  ];
  neighborCoords.forEach(n => {
    const potentialSector = getSector(G, n);
    if (potentialSector) {
      neighbors.push(potentialSector);
    }
  });

  return neighbors;
};

/** Finds sectors next to the current player's influence
 * TODO also sectors next to ships.
 */
const findAvailableSectors = (G, ctx) => {
  const sectors = G.sectors.filter(s => s.tile && s.tile.influence === ctx.currentPlayer);
  const validSectors = [];
  sectors.forEach(s => {
    const neighbors = getNeighbors(G, s);
    validSectors.splice(0, 0, ...neighbors.filter(n => !n.tile));
  });

  return validSectors;
};

/** Picks a random tile that hasn't already been `placed`. */
const PickUnplacedTile = (tiles) => {
  const unplacedTiles = tiles.filter(t => !t.placed);
  let tile = null;

  if (unplacedTiles.length === 0) {
    return null;
  } else {
    tile = unplacedTiles[randomInteger(0, unplacedTiles.length)];
  }

  return tile;
}

/** Adds new empty sectors to the map to allow further exploring */
const addExplorableSectors = (G, pos) => {
  const maybeSectors = generateRing3Sectors(pos);
  const validSectors = maybeSectors.filter(sector => !getSector(G, sector.pos));
  if (validSectors.length > 0) {
    G.sectors.push(...validSectors);
  }
}

/** Choose a sector next to one of your ships, or influenced sectors, pick a tile for that sector's "ring".
 * Choose to place or discard (if you don't like it).
 * Wormholes must line up (unless you have that special wormhole tech).
 * Put aliens/discovery stuff on it.
 * May take control by placing influence.
 * May activate colony ships after placing influence.
 */
const Explore = (G, ctx) => {
  const player = G.data[ctx.currentPlayer];
  if (player.influence === 0) {
    return INVALID_MOVE;
  }

  const validSectors = findAvailableSectors(G, ctx);
  if (validSectors.length === 0) {
    return INVALID_MOVE;
  } else {
    const theSector = validSectors[randomInteger(0, validSectors.length - 1)];
    const pos = theSector.pos;

    switch (theSector.ring) {
      case 1: {
        const tile = PickUnplacedTile(G.tiles.inner);
        if (!tile) {
          return INVALID_MOVE;
        }
        placeTile(G.sectors, G.tiles.inner, tile.id, pos);
        break;
      }

      case 2: {
        const tile = PickUnplacedTile(G.tiles.middle);
        if (!tile) {
          return INVALID_MOVE;
        }
        placeTile(G.sectors, G.tiles.middle, tile.id, pos);
        addExplorableSectors(G, pos);
        break;
      }

      default:
      case 3: {
        const tile = PickUnplacedTile(G.tiles.outer);
        if (!tile) {
          return INVALID_MOVE;
        }
        placeTile(G.sectors, G.tiles.outer, tile.id, pos);
        addExplorableSectors(G, pos);
        break;
      }
    }
  }

  player.influence -= 1;
  player.spentInfluence.explore += 1;
};

export default Explore;
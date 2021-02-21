/** A random integer between [min, max] (aka inclusive) */
export const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/** Is a sector at a position */
export const isPos = (sector, q, r, s) => sector.pos.q === q && sector.pos.r === r && sector.pos.s === s;

/** Get the distance between two sectors */
export const sectorDistance = (s1, s2) => {
  const a = s1.pos;
  const b = s2.pos;
  return (Math.abs(a.q - b.q) + Math.abs(a.r - b.r) + Math.abs(a.s - b.s)) / 2
}

/** Generate a new sector object at the given coord pair. */
export const generateSector = (q, r) => {
  let s = -q - r;
  let sector = {
    pos: { q, r, s },
  };

  let d = sectorDistance(sector, { pos: { q: 0, r: 0, s: 0 } });
  sector.ring = Math.min(d, 3);
  sector.tile = null;

  return sector;
}

/** Finds ring3 (outer sectors) that surround a given coordinate.
 * Naively implemented.
 */
export const generateRing3Sectors = ({ q, r, s }) => [
  generateSector(q, r - 1),
  generateSector(q + 1, r - 1),
  generateSector(q + 1, r),
  generateSector(q, r + 1),
  generateSector(q - 1, r + 1),
  generateSector(q - 1, r),
].filter(s => s.ring === 3);

/** Places a tile on a sector */
export const placeTile = (map, tiles, tileId, { q, r, s }) => {
  let sector = map.find(sector => isPos(sector, q, r, s));

  let desiredTile = tiles.find(t => t.id === tileId);

  if (desiredTile.placed) {
    console.error("Tile already placed:", tileId);
    return false;
  }

  if (sector && desiredTile) {
    sector.tile = desiredTile;
    desiredTile.placed = true;
  } else {
    console.warn("Sector/Tile not found: ", tileId, { q, r, s });
  }
  //sector.tile.pos ?
  return sector.tile !== null;
}



/** The protypical sector hex for reference. */
export const GalacticCenter = () => ({
  name: 'GC', id: '001', // cosmetic
  pos: { q: 0, r: 0, s: 0 }, //fixed for this specific sector
  influence: null,
  vp: 4, // victory points
  discovery: true, // squarish outline around influence disc
  artifact: true, // star by VP
  gcDefense: {
    hull: 7,
    damage: 4,
    targeting: 1
  },
  planets: [
    //Science
    { color: 'pink', advanced: false },
    { color: 'pink', advanced: true },

    //Materials
    { color: 'brown', advanced: false },
    { color: 'brown', advanced: true },

    //Wildcard
    { color: 'gray', advanced: false },
    { color: 'gray', advanced: false },
  ],
  //Wormholes referenced top, TR, BR, bottom, BL, TL when the name/id/vp are upright
  wormholes: {
    top: true,
    tr: true,
    br: true,
    bot: true,
    bl: true,
    tl: true
  }
});

/** All starting sectors have the same wormhole configuration. */
export const getStartingWormholes = () => ({
  top: true,
  tr: true,
  br: false,
  bot: true,
  bl: true,
  tl: false
});

/** Starting sectors tiles consisto of two sectors. One human and one alien.
 * Choosing one removes the other from the IRL game.
 * Could be interesting to allow any/all aliens.
 * Odd IDs are human, even are alien.
 * 6 sectors (pairs, so 12 total)
 * TODO Consider renaming -- not sure how legit copying the name/id is
 */
const StartingTiles = () => [
  {
    homeOf: 'human',
    name: 'PROCYON', id: '221',
    human: true,
    pos: null,
    //minDistance: 2,
    //maxDistance: 2,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
      { color: 'brown', advanced: false },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: '5dot blob',
    name: 'EPSILON ERIDANI', id: '222',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'human',
    name: 'ALTAIR', id: '223',
    human: true,
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
      { color: 'brown', advanced: false },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'delta^5',
    name: 'BETA HYDRI', id: '224',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
      { color: 'brown', advanced: true },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'human',
    name: 'ETA CASSIOPEIAE', id: '225',
    human: true,
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
      { color: 'brown', advanced: false },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'flower',
    name: 'S1 CYGNI', id: '226',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'pink', advanced: false },
      { color: 'brown', advanced: false },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'human',
    name: 'SIRIUS', id: '227',
    human: true,
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
      { color: 'brown', advanced: false },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'batwing',
    name: 'SIGMA DRACONIS', id: '228',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'pink', advanced: false },
      { color: 'brown', advanced: true },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'human',
    name: 'TAU CETI', id: '229',
    human: true,
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
      { color: 'brown', advanced: false },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'homeworld mothership',
    name: 'LAMBDA AURIGAE', id: '230',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'brown', advanced: true },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'human',
    name: 'DELTA PAVONIS', id: '231',
    human: true,
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
      { color: 'brown', advanced: false },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'kanji',
    name: 'RIGEL', id: '232',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'brown', advanced: false },
      { color: 'brown', advanced: true },
    ],
    wormholes: getStartingWormholes(),
  },
];

export default StartingTiles;
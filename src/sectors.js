

/** The protypical sector hex for reference. */
export const GalacticCenter = {
  name: 'GC', id: '001', // cosmetic
  pos: { q: 0, r: 0, s: 0 }, //fixed for this specific sector
  influence: null,
  vp: 4, // victory points
  artifact: true, // star by VP
  planets: [
    { pink: { squares: 1, advanced: 1 } }, // science
    { brown: { squares: 1, advanced: 1 } }, // materials
    { gray: { squares: 2 } } // wildcard
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
};

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
 */
export const StartingSectors = [
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
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1, advanced: 1 } },
      { brown: { squares: 1 } },
    ],
    wormholes: getStartingWormholes(),
  }, {
    homeOf: 'eridani',
    name: 'EPSILON ERIDANI', id: '222',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1, advanced: 1 } },
    ],
    wormholes: getStartingWormholes(),
  }
];

/** 8 */
export const InnerSectors = [];

/** 11 */
export const MiddleSectors = [];

/** 18 (dynamic depending on # of players) */
export const OuterSectors = [];

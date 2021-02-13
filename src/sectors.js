

/** The protypical sector hex for reference. */
export const GalacticCenter = () => ({
  name: 'GC', id: '001', // cosmetic
  pos: { q: 0, r: 0, s: 0 }, //fixed for this specific sector
  influence: true,
  vp: 4, // victory points
  artifact: true, // star by VP
  gcDefense: true,
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
export const StartingSectors = () => [
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
    homeOf: '5dot blob',
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
  }, {
    homeOf: 'human',
    name: 'ALTAIR', id: '223',
    human: true,
    pos: null,
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
    homeOf: 'delta^5',
    name: 'BETA HYDRI', id: '224',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    planets: [
      { orange: { squares: 1 } },
      { pink: { squares: 1, advanced: 1 } },
      { brown: { advanced: 1 } },
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
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1, advanced: 1 } },
      { brown: { squares: 1 } },
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
      { orange: { squares: 1 } },
      { pink: { squares: 1 } },
      { brown: { squares: 1 } },
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
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1, advanced: 1 } },
      { brown: { squares: 1 } },
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
      { orange: { squares: 1 } },
      { pink: { squares: 1 } },
      { brown: { advanced: 1 } },
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
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1, advanced: 1 } },
      { brown: { squares: 1 } },
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
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1 } },
      { brown: { advanced: 1 } },
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
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1, advanced: 1 } },
      { brown: { squares: 1 } },
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
      { orange: { advanced: 1 } },
      { pink: { squares: 1 } },
      { brown: { squares: 1, advanced: 1 } },
    ],
    wormholes: getStartingWormholes(),
  },
];

/** 8 */
export const InnerSectors = () => [
  {
    name: 'CASTOR', id: '101',
    pos: null,
    influence: null,
    vp: 2,
    artifact: false,
    ancient: true,
    planets: [
      { orange: { squares: 1 } },
      { brown: { squares: 1, advanced: 1 } },
    ],
    wormholes: {
      top: false,
      tl: true, tr: true,
      bl: true, br: true,
      bot: true,
    }
  }, {
    name: 'POLLUX', id: '102',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    ancient: false,
    planets: [
      { pink: { squares: 1, advanced: 1 } },
    ],
    wormholes: {
      top: true,
      tl: true, tr: false,
      bl: false, br: true,
      bot: true,
    }
  }, {
    name: 'BETA LEONIS', id: '103',
    pos: null,
    influence: null,
    vp: 2,
    artifact: false,
    ancient: false,
    planets: [
      { orange: { advanced: 1 } },
      { white: { squares: 1 } },
    ],
    wormholes: {
      top: true,
      tl: true, tr: true,
      bl: true, br: true,
      bot: false,
    }
  }, {
    name: 'ARCTURUS', id: '104',
    pos: null,
    influence: null,
    vp: 2,
    artifact: false,
    ancient: true,
    planets: [
      { orange: { squares: 1, advanced: 1 } },
      { pink: { squares: 1, advanced: 1 } },
    ],
    wormholes: {
      top: true,
      tl: false, tr: true,
      bl: true, br: false,
      bot: true,
    }
  }, {
    name: 'ZETA HERCULIS', id: '105',
    pos: null,
    influence: null,
    vp: 3,
    artifact: true,
    ancient: true,
    planets: [
      { orange: { squares: 1 } },
      { pink: { squares: 1 } },
      { brown: { advanced: 1 } },
    ],
    wormholes: {
      top: true,
      tl: true, tr: true,
      bl: true, br: false,
      bot: true,
    }
  }, {
    name: 'CAPELLA', id: '106',
    pos: null,
    influence: null,
    vp: 2,
    artifact: false,
    ancient: false,
    planets: [
      { brown: { squares: 1 } },
      { pink: { squares: 1 } },
    ],
    wormholes: {
      top: true,
      tl: false, tr: true,
      bl: false, br: true,
      bot: true,
    }
  }, {
    name: 'ALDEBARAN', id: '107',
    pos: null,
    influence: null,
    vp: 2,
    artifact: false,
    ancient: false,
    planets: [
      { orange: { squares: 1 } },
      { brown: { advanced: 1 } },
      { pink: { advanced: 1 } },
    ],
    wormholes: {
      top: true,
      tl: true, tr: true,
      bl: false, br: true,
      bot: true,
    }
  }, {
    name: 'MU CASSIOPEIAE', id: '108',
    pos: null,
    influence: null,
    vp: 2,
    artifact: false,
    ancient: true,
    planets: [
      { orange: { advanced: 1 } },
      { pink: { squares: 1 } },
      { white: { squares: 1 } },
    ],
    wormholes: {
      top: true,
      tl: false, tr: true,
      bl: true, br: false,
      bot: true,
    }
  }
];

/** 11 */
export const MiddleSectors = () => [];

/** 18 (dynamic depending on # of players) */
export const OuterSectors = (numPlayers) => [];

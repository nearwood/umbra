
/** 18 (dynamic depending on # of players) */
const OuterTiles = (numPlayers) => [{
  name: 'ZETA DRACONIS', id: '301',
  pos: null,
  influence: null,
  vp: 2,
  discovery: true,
  artifact: true,
  ancient: true,
  planets: [
    { orange: { squares: 1 } },
    { brown: { advanced: 1 } },
    { pink: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: false,
    bl: false, br: true,
    bot: true,
  }
}, {
  name: 'GAMMA SERPENTIS', id: '302',
  pos: null,
  influence: null,
  vp: 2,
  discovery: true,
  artifact: true,
  ancient: true,
  planets: [
    { orange: { advanced: 1 } },
    { brown: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: false,
    bl: true, br: false,
    bot: true,
  }
}, {
  name: 'ETA CEPHEI', id: '303',
  pos: null,
  influence: null,
  vp: 2,
  discovery: true,
  artifact: true,
  ancient: true,
  planets: [
    { white: { squares: 1 } },
  ],
  wormholes: {
    top: false,
    tl: true, tr: false,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'THETA PEGASI', id: '304',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { advanced: 1 } },
    { brown: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: false,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'LAMBDA SERPENTIS', id: '305',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: true,
  planets: [
    { pink: { squares: 1 } },
    { brown: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'BETA CENTAURI', id: '306',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { squares: 1 } },
    { brown: { squares: 1 } },
  ],
  wormholes: {
    top: false,
    tl: false, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'SIGMA SAGITTARII', id: '307',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { squares: 1 } },
    { pink: { advanced: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: false,
    bl: false, br: true,
    bot: true,
  }
}, {
  name: 'KAPPA SCORPII', id: '308',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { brown: { advanced: 1 } },
    { pink: { squares: 1, } },
  ],
  wormholes: {
    top: false,
    tl: true, tr: false,
    bl: false, br: true,
    bot: true,
  }
}, {
  name: 'PHI PISCIUM', id: '309',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { squares: 1 } },
    { pink: { advanced: 1 } },
  ],
  wormholes: {
    top: true,
    tl: true, tr: false,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'NU PHEONICIS', id: '310',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { squares: 1 } },
    { brown: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: false,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'CANOPUS', id: '311',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: false,
  planets: [
    { brown: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: false,
    bl: false, br: true,
    bot: true,
  }
}, {
  name: 'ANTARES', id: '312',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: false,
  planets: [
    { brown: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'APHA URSAE MINORIS', id: '313',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: false,
  planets: [
    { white: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: false,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'SPICA', id: '314',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: false,
  planets: [
    { white: { squares: 1 } },
  ],
  wormholes: {
    top: false,
    tl: false, tr: false,
    bl: true, br: true,
    bot: true,
  }
}, {
  name: 'EPSILON AURIGAE', id: '315',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: false,
  planets: [],
  wormholes: {
    top: true,
    tl: true, tr: false,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'IOTA CARINAE', id: '316',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: false,
  planets: [],
  wormholes: {
    top: true,
    tl: false, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'BETA CRUCIS', id: '317',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { squares: 1, advanced: 1 } },
  ],
  wormholes: {
    top: false,
    tl: false, tr: false,
    bl: true, br: false,
    bot: true,
  }
}, {
  name: 'GAMMA VELORUM', id: '318',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { brown: { advanced: 1 } },
    { white: { squares: 1 } },
  ],
  wormholes: {
    top: false,
    tl: false, tr: false,
    bl: false, br: true,
    bot: true,
  }
},
];

export default OuterTiles;

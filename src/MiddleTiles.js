/** 11 */
const MiddleTiles = () => [{
  name: 'ALPHA CENTAURI', id: '201',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { squares: 1, } },
    { brown: { squares: 1, } },
  ],
  wormholes: {
    top: false,
    tl: true, tr: true,
    bl: false, br: false,
    bot: true,
  },
}, {
  name: 'FOMAHAUT', id: '202',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { pink: { squares: 1, advanced: 1 } },
  ],
  wormholes: {
    top: false,
    tl: true, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'CHI DRACONIS', id: '203',
  pos: null,
  influence: null,
  vp: 1,
  discovery: true,
  artifact: false,
  ancient: true,
  planets: [
    { orange: { squares: 1 } },
    { brown: { squares: 1 } },
    { pink: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: true, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'VEGA', id: '204',
  pos: null,
  influence: null,
  vp: 2,
  discovery: true,
  artifact: true,
  ancient: true,
  planets: [
    { white: { squares: 1 } },
    { orange: { advanced: 1 } },
    { brown: { advanced: 1 } },
  ],
  wormholes: {
    top: true,
    tl: true, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'MU HERCULIS', id: '205',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { pink: { advanced: 1 } },
    { orange: { squares: 1, advanced: 1 } },
  ],
  wormholes: {
    top: false,
    tl: false, tr: false,
    bl: true, br: true,
    bot: true,
  }
}, {
  name: 'EPSILON INDI', id: '206',
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
    top: false,
    tl: true, tr: true,
    bl: false, br: true,
    bot: true,
  }
}, {
  name: 'ZETA RETICULI', id: '207',
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
  name: 'IOTA PERSEI', id: '208',
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
    bl: false, br: true,
    bot: true,
  }
}, {
  name: 'DELTA ERIDANI', id: '209',
  pos: null,
  influence: null,
  vp: 1,
  discovery: false,
  artifact: false,
  ancient: false,
  planets: [
    { orange: { advanced: 1 } },
    { pink: { squares: 1 } },
  ],
  wormholes: {
    top: true,
    tl: true, tr: true,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'PSI CAPRICORNI', id: '210',
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
    tl: true, tr: false,
    bl: false, br: false,
    bot: true,
  }
}, {
  name: 'BETA AQUILAE', id: '211',
  pos: null,
  influence: null,
  vp: 2,
  discovery: true,
  artifact: true,
  ancient: true,
  planets: [
    { white: { squares: 1 } },
    { orange: { squares: 1 } },
    { brown: { advanced: 1 } },
  ],
  wormholes: {
    top: true,
    tl: false, tr: true,
    bl: false, br: true,
    bot: true,
  }
},
];

export default MiddleTiles
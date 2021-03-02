

/** 8 */
const InnerTiles = () => [
  {
    name: 'CASTOR', id: '101',
    pos: null,
    influence: null,
    vp: 2,
    discovery: true,
    artifact: false,
    ancient: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'brown', advanced: false },
      { color: 'brown', advanced: true },
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
    discovery: false,
    artifact: true,
    ancient: false,
    planets: [
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
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
    discovery: false,
    artifact: false,
    ancient: false,
    planets: [
      { color: 'orange', advanced: true },
      { color: 'gray', advanced: false },
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
    discovery: true,
    artifact: false,
    ancient: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'pink', advanced: true },
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
    discovery: true,
    artifact: true,
    ancient: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'pink', advanced: false },
      { color: 'brown', advanced: true },
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
    discovery: false,
    artifact: false,
    ancient: false,
    planets: [
      { color: 'brown', advanced: false },
      { color: 'pink', advanced: false },
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
    discovery: false,
    artifact: false,
    ancient: false,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'brown', advanced: true },
      { color: 'pink', advanced: true },
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
    discovery: true,
    artifact: false,
    ancient: true,
    planets: [
      { color: 'orange', advanced: true },
      { color: 'pink', advanced: false },
      { color: 'gray', advanced: false },
    ],
    wormholes: {
      top: true,
      tl: false, tr: true,
      bl: true, br: false,
      bot: true,
    }
  }
];

export default InnerTiles;
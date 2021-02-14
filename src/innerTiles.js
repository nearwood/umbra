

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
    discovery: false,
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
    discovery: false,
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
    discovery: true,
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
    discovery: true,
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
    discovery: false,
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
    discovery: false,
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
    discovery: true,
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

export default InnerTiles;
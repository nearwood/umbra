const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const sectorsForNumPlayers = {
  '2': 5,
  '3': 10,
  '4': 14,
  '5': 16,
  '6': 18
};

/** 18 (dynamic depending on # of players)
 * 2: 5
 * 3: 10
 * 4: 14
 * 5: 16
 * 6: 18
*/
const OuterTiles = (numPlayers) => {
  const tiles = [{
    name: 'ZETA DRACONIS', id: '301',
    pos: null,
    influence: null,
    vp: 2,
    discovery: true,
    artifact: true,
    ancient: true,
    planets: [
      { color: 'orange', advanced: false },
      { color: 'brown', advanced: true },
      { color: 'pink', advanced: false },
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
      { color: 'orange', advanced: true },
      { color: 'brown', advanced: false },
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
      { color: 'gray', advanced: false },
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
      { color: 'orange', advanced: true },
      { color: 'brown', advanced: false },
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
      { color: 'pink', advanced: false },
      { color: 'brown', advanced: false },
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
      { color: 'orange', advanced: false },
      { color: 'brown', advanced: false },
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
      { color: 'orange', advanced: false },
      { color: 'pink', advanced: true },
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
      { color: 'brown', advanced: true },
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
      { color: 'orange', advanced: false },
      { color: 'pink', advanced: true },
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
      { color: 'orange', advanced: false },
      { color: 'brown', advanced: false },
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
      { color: 'brown', advanced: false },
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
      { color: 'brown', advanced: false },
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
      { color: 'gray', advanced: false },
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
      { color: 'gray', advanced: false },
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
      { color: 'orange', advanced: false },
      { color: 'orange', advanced: true },
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
      { color: 'brown', advanced: true },
      { color: 'gray', advanced: false },
    ],
    wormholes: {
      top: false,
      tl: false, tr: false,
      bl: false, br: true,
      bot: true,
    }
  }];

  if (!numPlayers || numPlayers === 6) {
    return tiles;
  } else if (numPlayers >= 2 && numPlayers <= 5) {
    //Remove random tiles until it's the right size
    while (tiles.length > sectorsForNumPlayers[numPlayers]) {
      const i = randomInteger(0, tiles.length - 1);
      tiles.splice(i, 1);
    }
    return tiles;
  } else {
    throw new Error('Invalid numPlayers for outer tiles');
  }
}

export default OuterTiles;

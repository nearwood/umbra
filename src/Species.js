export const SpeciesType = {
  human: 'human',
  alien: 'alien'
};

const generateHumanProps = ({ name, avatar = "avatars/pilot.png", startingSector }) => ({
  name,
  type: SpeciesType.human,
  avatar,
  startingSector,
  reputationSpots: [4, 4], //vp, discovery (???)
  startingResources: {
    money: 2,
    science: 3,
    materials: 3
  },
  colonyShips: 3,
  tradeRatio: 2,
  actions: {
    moves: 3,
    research: 1,
    builds: 2,
    upgrades: 2,
    influence: 1, //TODO two what?
    explore: 1
  },
  startingTech: ['Starbase'],
  buildCost: {
    Interceptor: 3,
    Cruiser: 5,
    Dreadnought: 8,
    Starbase: 3,
    Orbital: 5,
    Monolith: 10,
  }
});

const Species = () => [
  generateHumanProps({ name: 'Terran Directorate', avatar: 'avatars/avatar2.png', startingSector: '221' }),
  generateHumanProps({ name: 'Terran Federation', startingSector: '223' }),
  generateHumanProps({ name: 'Terran Union', startingSector: '225' }),
  generateHumanProps({ name: 'Terran Republic', startingSector: '227' }),
  generateHumanProps({ name: 'Terran Conglomerate', startingSector: '229' }),
  generateHumanProps({ name: 'Terran Alliance', startingSector: '231' }),
  {
    name: 'Eridani Empire',
    type: SpeciesType.alien,
    avatar: "avatars/alien-violet.png",
    special: {
      maxInfluence: -2, // starts wit h2 less than terrans
      startingReputation: 2, // starts with 2 random rep tiles
    },
    reputationSpots: [3, 4],
    startingSector: '222',
    startingResources: {
      money: 26,
      science: 2,
      materials: 4
    },
    colonyShips: 3,
    tradeRatio: 3,
    actions: {
      moves: 2,
      research: 1,
      builds: 2,
      upgrades: 2,
      influence: 1,
      explore: 1
    },
    startingTech: ['Gauss Shield', 'Fusion Drive', 'Plasma Cannon'],
    buildCost: {
      Interceptor: 3,
      Cruiser: 5,
      Dreadnought: 8,
      Starbase: 3,
      Orbital: 5,
      Monolith: 10,
    }
  },
  {
    name: 'Hydran Progress',
    type: SpeciesType.alien,
    avatar: "avatars/alien-blue-dark.png",
    special: {
      //place cube in advanced spot on starting sector
    },
    startingSector: '224',
    startingResources: {
      money: 2,
      science: 5,
      materials: 2
    },
    reputationSpots: [3, 4],
    colonyShips: 3,
    tradeRatio: 3,
    actions: {
      moves: 2,
      research: 2,
      builds: 2,
      upgrades: 2,
      influence: 1,
      explore: 1
    },
    startingTech: ['Advanced Labs'],
    buildCost: {
      Interceptor: 3,
      Cruiser: 5,
      Dreadnought: 8,
      Starbase: 3,
      Orbital: 5,
      Monolith: 10,
    }
  }, {
    name: 'Mechanema',
    type: SpeciesType.alien,
    avatar: "avatars/alien-blue.png",
    startingSector: '230',
    startingResources: {
      money: 3,
      science: 3,
      materials: 3
    },
    reputationSpots: [4, 4],
    colonyShips: 3,
    tradeRatio: 3,
    actions: {
      moves: 2,
      research: 1,
      builds: 3,
      upgrades: 3,
      influence: 1,
      explore: 1
    },
    startingTech: ['Positron Computer'],
    buildCost: {
      Interceptor: 2,
      Cruiser: 4,
      Dreadnought: 7,
      Starbase: 2,
      Orbital: 4,
      Monolith: 8,
    }
  }, {
    name: 'Planta',
    type: SpeciesType.alien,
    avatar: "avatars/alien-green.png",
    startingSector: '226',
    reputationSpots: [3, 4],
    special: {
      // explore 2, one after the other
      // pop. cubes automatically destroyed by combat ships at end of combat
      // +1 VP per controlled hex at game end
      // blueprints
    },
    startingResources: {
      money: 4,
      science: 4,
      materials: 4
    },
    colonyShips: 4,
    tradeRatio: 3,
    actions: {
      moves: 2,
      research: 1,
      builds: 2,
      upgrades: 2,
      influence: 1,
      explore: 2
    },
    startingTech: ['Starbase'],
    buildCost: {
      Interceptor: 3,
      Cruiser: 5,
      Dreadnought: 8,
      Starbase: 3,
      Orbital: 5,
      Monolith: 10,
    }
  }, {
    name: 'Orion Hegemony',
    type: SpeciesType.alien,
    avatar: "avatars/alien-yellow.png",
    special: {
      //starts with cruiser instead of interceptor
      //ship blueprints
    },
    reputationSpots: [5, 4],
    startingSector: '232',
    startingResources: {
      money: 3,
      science: 3,
      materials: 5
    },
    colonyShips: 3,
    tradeRatio: 4,
    actions: {
      moves: 2,
      research: 1,
      builds: 3,
      upgrades: 3,
      influence: 1,
      explore: 1
    },
    startingTech: ['Neutron Bombs', 'Gauss Shield'],
    buildCost: {
      Interceptor: 3,
      Cruiser: 5,
      Dreadnought: 8,
      Starbase: 3,
      Orbital: 5,
      Monolith: 10,
    }
  }, {
    name: 'Descendants of Draco',
    type: SpeciesType.alien,
    avatar: "avatars/alien-yellow.png",
    special: {
      // ships can be in hexes with ancients, but don't battle them
      // can place influence on ancient ship hexes
      // can't collect discovery tiles on hexes with ancients
      // 1vp per ancient ship left on map at game end
      // explore: turns 2 hexes, picks 1 or discards both
    },
    reputationSpots: [4, 4],
    startingSector: '228',
    startingResources: {
      money: 2,
      science: 4,
      materials: 3
    },
    colonyShips: 3,
    tradeRatio: 3,
    actions: {
      moves: 2,
      research: 1,
      builds: 2,
      upgrades: 2,
      influence: 1,
      explore: 2 //at the same time
    },
    startingTech: [],
    buildCost: {
      Interceptor: 3,
      Cruiser: 5,
      Dreadnought: 8,
      Starbase: 3,
      Orbital: 5,
      Monolith: 10,
    }
  }
];

export default Species;
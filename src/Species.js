export const SpeciesType = {
  human: 'human',
  alien: 'alien'
};

const Species = () => [
  {
    name: 'Terran Conglomerate',
    type: SpeciesType.human,
    avatar: "avatars/pilot.png", //JPG URL?
    startingSector: '229', //TODO Verify that's what this is.
    startingResources: {
      money: 2,
      science: 3,
      materials: 3
    },
    colonyShips: 3,
    tradeRatio: 2,
    actions: {
      moves: 3,
      builds: 2,
      upgrades: 2,
      influence: 2,
      explore: 1
    },
    tech: ['Starbase'], //Starting technologies
    shipCost: {
      Interceptor: 3,
      Cruiser: 5,
      Dreadnought: 8,
      Starbase: 3
    }
  },
  {
    name: 'Mechanema',
    type: SpeciesType.alien,
    avatar: "avatars/alien-yellow.png",
    startingSector: '230',
    startingResources: {
      money: 3,
      science: 3,
      materials: 3
    },
    colonyShips: 3,
    tradeRatio: 3,
    actions: {
      moves: 2,
      builds: 3,
      upgrades: 3,
      influence: 2,
      explore: 1
    },
    tech: ['Positron Computer'],
    shipCost: {
      Interceptor: 2,
      Cruiser: 4,
      Dreadnought: 7,
      Starbase: 2
    }
  }
];

export default Species;
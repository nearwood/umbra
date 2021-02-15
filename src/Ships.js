
const Ships = () => [
  {
    name: 'Interceptor',
    baseEnergy: 0,
    baseInitiative: 2,
    slots: [{
      empty: true
    }, {
      name: 'Ion Cannon'
    }, {
      name: 'Nuclear Source'
    }, {
      name: 'Nuclear Drive'
    }],
    //SVG definitions? large + small?
  }, {
    name: 'Cruiser',
    baseEnergy: 0,
    baseInitiative: 1,
    slots: [{
      empty: true
    }, {
      name: 'Ion Cannon'
    }, {
      name: 'Nuclear Source'
    }, {
      name: 'Nuclear Drive'
    }, {
      name: 'Hull'
    }, {
      name: 'Electron Computer'
    }],
  }, {
    name: 'Dreadnought',
    baseEnergy: 0,
    baseInitiative: 0,
    slots: [{
      empty: true
    }, {
      name: 'Ion Cannon'
    }, {
      name: 'Ion Cannon'
    }, {
      name: 'Nuclear Source'
    }, {
      name: 'Nuclear Drive'
    }, {
      name: 'Hull'
    }, {
      name: 'Hull'
    }, {
      name: 'Electron Computer'
    }],
  }, {
    name: 'Starbase',
    baseInitiative: 4,
    baseEnergy: 3,
    slots: [{
      empty: true
    }, {
      name: 'Ion Cannon'
    }, {
      name: 'Hull'
    }, {
      name: 'Hull'
    }, {
      name: 'Electron Computer'
    }],
  }
];

export default Ships;

const Ships = () => [
  {
    name: 'Interceptor',
    quantity: 8,
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
    quantity: 4,
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
    quantity: 2,
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
    quantity: 4,
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
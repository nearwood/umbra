const TechCategory = {
  Military: 'Military',
  Grid: 'Grid',
  Nano: 'Nano'
};

const TechType = {
  None: 'None',
  Part: 'Part', //A ship part (upgrade)
  Build: 'Build',  //Can now build ship/structure
  Instant: 'Instant' //One-time effect
};

/* Dynamic depending on numPlayers
 * 2n + 8
 * Categories: Military, Grid, Nano
 */
const TechTiles = (numPlayers) => {
  const tiles = [
    /// MILITARY ///
    {
      name: 'Neutron Bombs',
      type: TechType.None,
      quantity: 5
    }, {
      name: 'Starbase',
      type: TechType.Build,
      quantity: 5
    }, {
      name: 'Plasma Cannon',
      type: TechType.Part,
      quantity: 5
    }, {
      name: 'Phase Shield',
      type: TechType.Part,
      quantity: 4
    }, {
      category: TechCategory.Military,
      name: 'Advanced Mining',
      cost: 10,
      minCost: 6, //Min cost after discounts
      type: TechType.None, //Special type
      quantity: 4
    }, {
      name: 'Tachyon Source',
      type: TechType.Part,
      quantity: 3
    }, {
      name: 'Plasma Missile',
      type: TechType.Part,
      quantity: 3
    }, {
      name: 'Gluon Computer',
      type: TechType.Part,
      quantity: 3
    },
    /// GRID ///
    {
      name: 'Advanced Economy',
      type: TechType.None,
      quantity: 4,
      cost: 10,
      minCost: 6
    }, {
      name: 'Improved Hull',
      type: TechType.Part,
      quantity: 5
    }, {
      name: 'Quantum Grid',
      type: TechType.Instant,
      quantity: 3
    }, {
      name: 'Tachyon Drive',
      type: TechType.Part,
      quantity: 3
    }, {
      name: 'Gauss Shield',
      type: TechType.Part,
      quantity: 5
    }, {
      name: 'Positron Computer',
      type: TechType.Part,
      quantity: 4
    }, {
      name: 'Fusion Source',
      type: TechType.Part,
      quantity: 5
    }, {
      name: 'Antimatter Cannon',
      type: TechType.Part,
      quantity: 3
    },
    /// NANO ///
    {
      name: 'Orbital',
      type: TechType.Build,
      quantity: 4
    }, {
      name: 'Advanced Labs',
      type: TechType.None,
      quantity: 4
    }, {
      name: 'Fusion Drive',
      type: TechType.Part,
      quantity: 5
    }, {
      name: 'Wormhole Generator',
      type: TechType.None,
      quantity: 3
    }, {
      name: 'Nanorobots',
      type: TechType.None,
      quantity: 5
    }, {
      name: 'Advanced Robotics',
      type: TechType.Instant,
      quantity: 5
    }, {
      name: 'Monolith',
      type: TechType.Build,
      quantity: 3
    }, {
      name: 'Artifact Key',
      type: TechType.Instant,
      quantity: 3
    }
  ];
};

export default TechTiles;
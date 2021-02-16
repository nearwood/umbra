export const TechCategory = {
  Military: 'Military',
  Grid: 'Grid',
  Nano: 'Nano'
};

export const TechType = {
  None: 'None',
  Part: 'Part', //A ship part (upgrade)
  Build: 'Build',  //Can now build ship/structure
  Instant: 'Instant' //One-time effect
};

/** ~~Dynamic depending on numPlayers~~
 * 2n + 8
 * Categories: Military, Grid, Nano
 */
const TechTiles = () => {
  const tiles = [
    /// MILITARY ///
    {
      category: TechCategory.Military,
      name: 'Neutron Bombs',
      type: TechType.None,
      supply: 0,
      bag: 5,
      cost: 2,
      minCost: 2
    }, {
      category: TechCategory.Military,
      name: 'Starbase',
      type: TechType.Build,
      supply: 0,
      bag: 5,
      cost: 4,
      minCost: 3
    }, {
      category: TechCategory.Military,
      name: 'Plasma Cannon',
      type: TechType.Part,
      supply: 0,
      bag: 5,
      cost: 6,
      minCost: 4
    }, {
      category: TechCategory.Military,
      name: 'Phase Shield',
      type: TechType.Part,
      supply: 0,
      bag: 4,
      cost: 8,
      minCost: 5
    }, {
      category: TechCategory.Military,
      name: 'Advanced Mining',
      type: TechType.None, //Special type
      supply: 0,
      bag: 4,
      cost: 10,
      minCost: 6, //Min cost after discounts
    }, {
      category: TechCategory.Military,
      name: 'Tachyon Source',
      type: TechType.Part,
      supply: 0,
      bag: 3,
      cost: 12,
      minCost: 6
    }, {
      category: TechCategory.Military,
      name: 'Plasma Missile',
      type: TechType.Part,
      supply: 0,
      bag: 3,
      cost: 14,
      minCost: 7
    }, {
      category: TechCategory.Military,
      name: 'Gluon Computer',
      type: TechType.Part,
      supply: 0,
      bag: 3,
      cost: 16,
      minCost: 8
    },
    /// GRID ///
    {
      category: TechCategory.Grid,
      name: 'Gauss Shield',
      type: TechType.Part,
      supply: 0,
      bag: 5,
      cost: 2,
      minCost: 2,
    }, {
      category: TechCategory.Grid,
      name: 'Improved Hull',
      type: TechType.Part,
      supply: 0,
      bag: 5,
      cost: 4,
      minCost: 3,
    }, {
      category: TechCategory.Grid,
      name: 'Fusion Source',
      type: TechType.Part,
      supply: 0,
      bag: 5,
      cost: 6,
      minCost: 4,
    }, {
      category: TechCategory.Grid,
      name: 'Positron Computer',
      type: TechType.Part,
      supply: 0,
      bag: 4,
      cost: 8,
      minCost: 5,
    }, {
      category: TechCategory.Grid,
      name: 'Advanced Economy',
      type: TechType.None,
      supply: 0,
      bag: 4,
      cost: 10,
      minCost: 6
    }, {
      category: TechCategory.Grid,
      name: 'Tachyon Drive',
      type: TechType.Part,
      supply: 0,
      bag: 3,
      cost: 12,
      minCost: 6,
    }, {
      category: TechCategory.Grid,
      name: 'Antimatter Cannon',
      type: TechType.Part,
      supply: 0,
      bag: 3,
      cost: 14,
      minCost: 7,
    }, {
      category: TechCategory.Grid,
      name: 'Quantum Grid',
      type: TechType.Instant,
      supply: 0,
      bag: 3,
      cost: 16,
      minCost: 8,
    },
    /// NANO ///
    {
      category: TechCategory.Nano,
      name: 'Nanorobots',
      type: TechType.None,
      supply: 0,
      bag: 5,
      cost: 2,
      minCost: 2
    }, {
      category: TechCategory.Nano,
      name: 'Fusion Drive',
      type: TechType.Part,
      supply: 0,
      bag: 5,
      cost: 4,
      minCost: 3
    }, {
      category: TechCategory.Nano,
      name: 'Advanced Robotics',
      type: TechType.Instant,
      supply: 0,
      bag: 5,
      cost: 6,
      minCost: 4
    }, {
      category: TechCategory.Nano,
      name: 'Orbital',
      type: TechType.Build,
      supply: 0,
      bag: 4,
      cost: 8,
      minCost: 5
    }, {
      category: TechCategory.Nano,
      name: 'Advanced Labs',
      type: TechType.None,
      supply: 0,
      bag: 4,
      cost: 10,
      minCost: 6
    }, {
      category: TechCategory.Nano,
      name: 'Monolith',
      type: TechType.Build,
      supply: 0,
      bag: 3,
      cost: 12,
      minCost: 6
    }, {
      category: TechCategory.Nano,
      name: 'Artifact Key',
      type: TechType.Instant,
      supply: 0,
      bag: 3,
      cost: 14,
      minCost: 7
    }, {
      category: TechCategory.Nano,
      name: 'Wormhole Generator',
      type: TechType.None,
      supply: 0,
      bag: 3,
      cost: 16,
      minCost: 8
    }
  ];

  return tiles;
};

export default TechTiles;

/** Parts that players can upgrade their ships with.
 * Some replenish each round, some don't?
 */
const ShipParts = () => [
  /// Unlimited??? ///
  {
    name: 'Ion Cannon',
    quantity: Infinity,
    damage: 1,
    energy: -1,
  }, {
    name: 'Electron Computer',
    quantity: Infinity,
    targeting: 1,
  }, {
    name: 'Nuclear Drive',
    quantity: Infinity,
    move: 1,
    initiative: 1,
    energy: -1,
  }, {
    name: 'Nuclear Source',
    quantity: Infinity,
    energy: 3,
  }, {
    name: 'Hull',
    quantity: Infinity,
    damage: -1,
  },
  /// LIMITED ??? ///
  {
    prereq: true,
    name: 'Plasma Cannon',
    quantity: 0,
    damaged: 2, //Does damage
    energy: -2, //Requires energy
  }, {
    prereq: true,
    name: 'Plasma Missile',
    quantity: 0,
    damage: 4,
  }, {
    prereq: true,
    name: 'Positron Computer',
    quantity: 0,
    targeting: 2,
    initiative: 1,
    energy: -1
  }, {
    prereq: true,
    name: 'Gluon Computer',
    quantity: 0,
    targeting: 3,
    initiative: 2,
    energy: -2
  }, {
    prereq: true,
    name: 'Antimatter Cannon',
    quantity: 0,
    damage: 4,
    energy: -4
  }, {
    prereq: true,
    name: 'Improved Hull',
    quantity: 0,
    damage: -2
  }, {
    prereq: true,
    name: 'Gauss Shield',
    quantity: 0,
    targeting: -1
  }, {
    prereq: true,
    name: 'Phase Shield',
    quantity: 0,
    targeting: -2,
    energy: -1
  }, {
    prereq: true,
    name: 'Fusion Drive',
    quantity: 0,
    move: 2,
    initiative: 2,
    energy: -2
  }, {
    prereq: true,
    name: 'Tachyon Drive',
    quantity: 0,
    move: 3,
    initiative: 3,
    energy: -3
  }, {
    prereq: true,
    name: 'Fusion Source',
    quantity: 0,
    energy: 6
  }, {
    prereq: true,
    name: 'Tachyon Source',
    quantity: 0,
    energy: 9
  }
];

export default ShipParts;
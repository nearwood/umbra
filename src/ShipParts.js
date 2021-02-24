
/** Parts that players can upgrade their ships with.
 * Some replenish each round, some don't?
 */
const ShipParts = () => [
  /// Unlimited??? ///
  {
    name: 'Ion Cannon',
    damage: 1,
    energy: -1,
  }, {
    name: 'Electron Computer',
    targeting: 1,
  }, {
    name: 'Nuclear Drive',
    move: 1,
    initiative: 1,
    energy: -1,
  }, {
    name: 'Nuclear Source',
    energy: 3,
  }, {
    name: 'Hull',
    damage: -1,
  },
  /// LIMITED ??? ///
  {
    prereq: true,
    name: 'Plasma Cannon',
    damaged: 2, //Does damage
    energy: -2, //Requires energy
  }, {
    prereq: true,
    name: 'Plasma Missile',
    damage: 4,
  }, {
    prereq: true,
    name: 'Positron Computer',
    targeting: 2,
    initiative: 1,
    energy: -1
  }, {
    prereq: true,
    name: 'Gluon Computer',
    targeting: 3,
    initiative: 2,
    energy: -2
  }, {
    prereq: true,
    name: 'Antimatter Cannon',
    damage: 4,
    energy: -4
  }, {
    prereq: true,
    name: 'Improved Hull',
    damage: -2
  }, {
    prereq: true,
    name: 'Gauss Shield',
    targeting: -1
  }, {
    prereq: true,
    name: 'Phase Shield',
    targeting: -2,
    energy: -1
  }, {
    prereq: true,
    name: 'Fusion Drive',
    move: 2,
    initiative: 2,
    energy: -2
  }, {
    prereq: true,
    name: 'Tachyon Drive',
    move: 3,
    initiative: 3,
    energy: -3
  }, {
    prereq: true,
    name: 'Fusion Source',
    energy: 6
  }, {
    prereq: true,
    name: 'Tachyon Source',
    energy: 9
  }
];

export default ShipParts;
import Species from './Species';
import TechTiles from './TechTiles';

const areUnique = (values) => {
  const set = [];
  for (let i = 0; i < values.length; ++i) {
    const v = values[i];
    if (!set.includes(v)) {
      set.push(v);
    } else {
      return false;
    }
  }

  return true;
}

const tileCheck = (s) => {
  expect(s.name.length).toBeGreaterThan(0);
  expect(s.type.length).toBeGreaterThan(0);
  expect(s.reputationSpots.length).toBe(2);

  const tech = TechTiles();
  //Starting techs should match up to (one) tech tile
  s.startingTech.forEach(st => expect(tech.some(t => t.name === st)).toBe(true));
};

/**
 * Add numbers or true boolean values up
 * @param {*} prop 
 */
const propTotal = prop => (acc, s) => (typeof s[prop] === 'boolean') ? (s[prop] ? ++acc : acc) : acc + s[prop];

test('species look ok', () => {
  const species = Species();
  expect(species.length).toBe(12);
  let startingSectors = [];
  species.forEach(t => {
    tileCheck(t);
    startingSectors.push(t.startingSector);
  });

  expect(areUnique(startingSectors)).toBe(true);
});



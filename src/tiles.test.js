import StartingTiles from './startingTiles';
import InnerTiles from './innerTiles';

const tileCheck = (s) => {
  expect(s.name.length).toBeGreaterThan(0);
  expect(s.id.length).toBeGreaterThan(0);
  expect(Object.keys(s.wormholes)).toContain("top");
  expect(Object.keys(s.wormholes)).toContain("tr");
  expect(Object.keys(s.wormholes)).toContain("br");
  expect(Object.keys(s.wormholes)).toContain("bot");
  expect(Object.keys(s.wormholes)).toContain("bl");
  expect(Object.keys(s.wormholes)).toContain("tl");
};

/**
 * Add numbers or true boolean values up
 * @param {*} prop 
 */
const propTotal = prop => (acc, s) => (typeof s[prop] === 'boolean') ? (s[prop] ? ++acc : acc) : acc + s[prop];

test('starting tiles look ok', () => {
  const startingTiles = StartingTiles();
  expect(startingTiles.length).toBe(12);
  startingTiles.forEach(tileCheck);
  expect(startingTiles.reduce(propTotal('artifact'), 0)).toBe(12);
  expect(startingTiles.reduce(propTotal('vp'), 0)).toBe(36);
});

test('inner tiles', () => {
  const innerTiles = InnerTiles();
  expect(innerTiles.length).toBe(8);
  innerTiles.forEach(tileCheck);
  expect(innerTiles.reduce(propTotal('artifact'), 0)).toBe(2);
  expect(innerTiles.reduce(propTotal('ancient'), 0)).toBe(4);
  expect(innerTiles.reduce(propTotal('vp'), 0)).toBe(18);
});

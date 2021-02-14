import StartingTiles from './startingTiles';
import InnerTiles from './innerTiles';
import MiddleTiles from './middleTiles';
import OuterTiles from './outerTiles';

const tileCheck = (s) => {
  expect(s.name.length).toBeGreaterThan(0);
  expect(s.id.length).toBe(3);
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
  expect(innerTiles.reduce(propTotal('discovery'), 0)).toBe(4);
  expect(innerTiles.reduce(propTotal('artifact'), 0)).toBe(2);
  expect(innerTiles.reduce(propTotal('ancient'), 0)).toBe(4);
  expect(innerTiles.reduce(propTotal('vp'), 0)).toBe(18);
});

test('middle tiles', () => {
  const middleTiles = MiddleTiles();
  expect(middleTiles.length).toBe(11);
  middleTiles.forEach(tileCheck);
  expect(middleTiles.reduce(propTotal('discovery'), 0)).toBe(6);
  expect(middleTiles.reduce(propTotal('artifact'), 0)).toBe(2);
  expect(middleTiles.reduce(propTotal('ancient'), 0)).toBe(3);
  expect(middleTiles.reduce(propTotal('vp'), 0)).toBe(13);
});

test('outer tiles', () => {
  const outerTiles = OuterTiles();
  expect(outerTiles.length).toBe(18);
  outerTiles.forEach(tileCheck);
  expect(outerTiles.reduce(propTotal('discovery'), 0)).toBe(10);
  expect(outerTiles.reduce(propTotal('artifact'), 0)).toBe(3);
  expect(outerTiles.reduce(propTotal('ancient'), 0)).toBe(4);
  expect(outerTiles.reduce(propTotal('vp'), 0)).toBe(21);
});

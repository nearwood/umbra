import { StartingSectors, InnerSectors } from './sectors';

const sectorCheck = (s) => {
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

test('starting sectors look ok', () => {
  const startingSectors = StartingSectors();
  expect(startingSectors.length).toBe(12);
  startingSectors.forEach(sectorCheck);
  expect(startingSectors.reduce(propTotal('artifact'), 0)).toBe(12);
  expect(startingSectors.reduce(propTotal('vp'), 0)).toBe(36);
});

test('inner sectors', () => {
  const innerSectors = InnerSectors();
  expect(innerSectors.length).toBe(8);
  innerSectors.forEach(sectorCheck);
  expect(innerSectors.reduce(propTotal('artifact'), 0)).toBe(2);
  expect(innerSectors.reduce(propTotal('ancient'), 0)).toBe(4);
  expect(innerSectors.reduce(propTotal('vp'), 0)).toBe(18);
});

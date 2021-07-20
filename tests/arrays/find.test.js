/* eslint-disable no-unused-vars */
const find = require('../../src/arrays/find');

test('find should return value if this value exists in the array', () => {
  const arr = [1, 2, 3];
  expect(arr.find((number) => number === 3)).toBeTruthy();
});

test('find should return undefined if this value doesnt exist in the array', () => {
  const arr = [1, 2, 3];
  expect(arr.find((number) => number === 5)).toBeUndefined();
});

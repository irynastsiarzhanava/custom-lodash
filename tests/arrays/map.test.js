/* eslint-disable no-unused-vars */
const map = require('../../src/arrays/map');

test('map should add the transformed elements to a new array and return that array', () => {
  const arr = [1, 2, 3];
  const fn = (value) => value * 5;
  const result = [5, 10, 15];
  expect(map(arr, fn)).toEqual([5, 10, 15]);
});

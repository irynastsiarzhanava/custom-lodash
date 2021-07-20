/* eslint-disable no-unused-vars */
const map = require('../src/arrays/map');

test('map should add the transformed elements to a new array and return that array', () => {
  const arr = [1, 2, 3];
  const result = [2, 3, 4];
  expect(arr.map((value) => value + 1)).toEqual(result);
});

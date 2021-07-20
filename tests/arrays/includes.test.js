/* eslint-disable no-unused-vars */
const includes = require('../../src/arrays/includes');

test('indludes should return true if value exists in the array', () => {
  const arr = [1, 2, 3];
  expect(arr.includes(3)).toBeTruthy();
});

test('indludes should return false if value doesnt exist in the array', () => {
  const arr = [1, 2, 3];
  expect(arr.includes(5)).toBeFalsy();
});

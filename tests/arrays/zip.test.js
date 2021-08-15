const zip = require('../../src/arrays/zip');

test('zip should create an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.', () => {
  const arr1 = [1, 2];
  const arr2 = [30, 40];
  const arr3 = ['Hello', 'World'];
  const result = [[1, 30, 'Hello'], [2, 40, 'World']];
  expect(zip(arr1, arr2, arr3)).toEqual(result);
});

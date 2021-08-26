const mySlice = require('../shared/slice');

function take(array, num) {
  if (num === undefined) {
    return mySlice(array, 0, 1);
  }
  if (num > array.length) {
    return array;
  }
  return mySlice(array, 0, num);
}

module.exports = take;

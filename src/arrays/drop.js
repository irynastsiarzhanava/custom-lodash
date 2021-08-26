const mySplicedArray = require('../shared/splice-array');

function drop(array, num) {
  const { length } = array;
  if (num === undefined) {
    return mySplicedArray(array, 0, 1);
  }
  if (num > length) {
    return [];
  }
  if (num === 0) {
    return array;
  }
  return mySplicedArray(array, 0, num);
}

module.exports = drop;

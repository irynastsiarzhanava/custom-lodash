const mySplice = require('../shared/splice');

function drop(array, num) {
  const { length } = array;
  if (num === undefined) {
    return mySplice(array, 0, 1);
  }
  if (num > length) {
    return [];
  }
  if (num === 0) {
    return array;
  }
  return mySplice(array, 0, num);
}

module.exports = drop;

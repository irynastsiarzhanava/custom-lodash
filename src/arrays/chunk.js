const mySpliceRomovedItems = require('../shared/splice-removed-items');
const myPush = require('../shared/push');
const mySplicedArray = require('../shared/splice-array');

function chunk(array, size) {
  const results = [];

  while (array.length) {
    const removed = mySpliceRomovedItems(array, 0, size);
    myPush(results, removed);
    // eslint-disable-next-line no-param-reassign
    array = mySplicedArray(array, 0, size);
  }
  return results;
}

module.exports = chunk;

const mySplice = require('../shared/splice');
const myPush = require('../shared/push');

function chunk(array, size) {
  const results = [];

  while (array.length) {
    myPush(results, array.splice(0, size));
  }
  return results;
}

module.exports = chunk;

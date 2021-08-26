const myPush = require('./push');

function mySplicedArray(array, start, count, item) {
  const { length } = array;
  const newArray = [];
  const removedItems = [];
  let newCount = count;
  if (item === undefined) {
    if (newCount > 0) {
      newCount -= 1;
    } else {
      return [];
    }
    for (let i = 0; i < length; i += 1) {
      if (((i <= start + newCount && i >= start) || (i <= start && i >= start + newCount))) {
        myPush(removedItems, array[i]);
      }
      if (!((i <= start + newCount && i >= start) || (i <= start && i >= start + newCount))) {
        myPush(newArray, array[i]);
      }
    }
  }
  return newArray;
}

module.exports = mySplicedArray;

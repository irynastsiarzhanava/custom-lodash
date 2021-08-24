const myPush = require('./push');

function mySplice(array, index, count) {
  const { length } = array;
  const newArray = [];
  let newCount = count;
  if (newCount > 0) {
    newCount -= 1;
  } else {
    newCount += 1;
  }
  for (let i = 0; i < length; i += 1) {
    if (!((i <= index + newCount && i >= index) || (i <= index && i >= index + newCount))) {
      myPush(newArray, array[i]);
    }
  }
  return newArray;
}

module.exports = mySplice;

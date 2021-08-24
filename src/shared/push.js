function myPush(array, value) {
  const { length } = array;
  const newArr = array;
  newArr[length] = value;
  return newArr;
}

module.exports = myPush;

function push(array, value) {
  const newArr = array;
  newArr[newArr.length] = value;
  return newArr;
}

module.exports = push;

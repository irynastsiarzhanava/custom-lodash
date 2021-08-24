function compact(array) {
  const trueArr = [];
  let falsy = false;
  let length = 0;
  while (array[length] !== undefined) {
    length += 1;
  }

  for (let i = 0; i < length; i += 1) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      trueArr[trueArr.length] = array[i];
    }
  }
  return trueArr;
}

module.exports = compact;

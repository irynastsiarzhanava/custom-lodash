function take(array, num) {
  if (num === undefined) {
    array.splice(0, 1);
    return array;
  }
  if (num > array.length) {
    return [];
  }
  array.splice(0, num);
  return array;
}

module.exports = take;

function take(array, num) {
  if (num === undefined) {
    return array.slice(0, 1);
  }
  return array.slice(0, num);
}

module.exports = take;

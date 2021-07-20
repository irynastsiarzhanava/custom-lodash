function includes(array, searchedValue) {
  const { length } = array;
  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    if (value === searchedValue) {
      return true;
    }
  }
  return false;
}

module.exports = includes;

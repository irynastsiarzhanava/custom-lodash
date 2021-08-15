function zip(...arrays) {
  const minLen = Math.min(...arrays.map((arr) => arr.length));
  const [firstArr, ...restArrs] = arrays;
  return firstArr.slice(0, minLen).map(
    (val, i) => [val, ...restArrs.map((arr) => arr[i])],
  );
}

module.exports = zip;

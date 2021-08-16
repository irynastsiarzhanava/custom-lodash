function filter(obj, fn) {
  const entries = Object.entries(obj).filter(fn);
  return Object.fromEntries(entries);
}

const omitBy = (obj, fn) => filter(obj, ([key, val]) => !fn(val, key));

module.exports = omitBy;

function filter(obj, fn) {
  const entries = Object.entries(obj).filter(fn);
  return Object.fromEntries(entries);
}

const pickBy = (obj, fn) => filter(obj, ([key, val]) => fn(val, key));

module.exports = pickBy;

/* eslint-disable no-restricted-syntax */
function pick(obj, ...keys) {
  const objKeys = keys.flat();
  const result = {};
  for (const key in obj) {
    if (objKeys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

module.exports = pick;

/* eslint-disable no-restricted-syntax */
const omitBy = (obj, fn) => {
  const result = {};
  for (const key in obj) {
    if (!fn(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = omitBy;

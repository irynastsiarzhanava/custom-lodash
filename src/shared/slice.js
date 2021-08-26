/* eslint-disable no-param-reassign */
function mySlice(array, start, end) {
  const data = array;
  let stop = data.length - 1;
  const resultArr = [];
  if (start === undefined) {
    return resultArr;
  }
  if (start < 0) {
    start += data.length;
  }
  if (end !== undefined && end > 0) {
    stop = end - 1;
  }
  for (let index = start; index <= stop; index += 1) {
    const element = data[index];
    resultArr.push(element);
  }
  return resultArr;
}

module.exports = mySlice;

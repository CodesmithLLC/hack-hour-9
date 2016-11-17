/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an
 * array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

//grab each array inside of the array
//sort from smallest to largest range
// for each array check the first number compared to all the other numbers

function mergeRanges(array) {
  const sortedArr = array.sort((a, b) => a[0] - b[0]);
  const outArr = [array[0]];
  console.log(sortedArr)

  for (let i = 1; i < sortedArr.length; i++) {
    console.log(sortedArr[i - 1][1], '? > || = ?', sortedArr[i][0]);
    if (sortedArr[i - 1][1] >= sortedArr[i][0]) {
      const outNum = Math.max(sortedArr[i - 1][1], sortedArr[i][1]);
      const tempArr = [].concat(sortedArr[i - 1][0], outNum);
      console.log('i - 1 = ', i - 1)
      outArr[outArr.length - 1] = tempArr;
    } else {
      outArr.push(sortedArr[i]);
    }
  }
  return outArr;
}

module.exports = mergeRanges;

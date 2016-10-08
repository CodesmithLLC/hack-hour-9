/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!arr) return false;
  if (arr[0] === target) return true;
  len = len || arr.length;
  return findInOrderedSet(arr.slice(0, len / 2), target) || findInOrderedSet(arr.slice(len / 2, len), target);
}


module.exports = findInOrderedSet;

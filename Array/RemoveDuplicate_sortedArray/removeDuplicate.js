//      *              Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 */
// * Two pointer approach : -

const removeDuplicates = (nums) => {
  let i = 0,
    j = 0;
  let l = nums.length;
  while (j < l) {
    //  if value at i and j index are equal then increase j index
    if (nums[i] === nums[j]) {
      j++;
    }
    // first increase i index
    // put value at j index to i index
    else {
      i++;
      nums[i] = nums[j];
    }
  }
  nums.length = i + 1;
  return nums;
};

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5, 5, 7, 8]));
// [1, 2, 3, 4, 5, 7, 8]

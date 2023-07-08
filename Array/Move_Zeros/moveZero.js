/**
 * @param {number[]} nums
 * @return {number[]}
 */
// * Approach #1 (using swap)
const moveZeros1 = (nums) => {
  let i = 0,
    j = 0,
    l = nums.length;
  while (j < l) {
    if (nums[i] === nums[j]) j++;
    else if (nums[i] === 0) {
      // swap the value of i and j
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      i++;
    }
  }
  return nums;
};

/***********************************************************/
// * Approach #02

const moveZeros2 = (nums) => {
  let i = 0,
    j = 0,
    l = nums.length;
  while (j < l) {
    // if value at j index is not equal
    // then put value at j to i index
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  // replace rest of the value to zero.
  while (i < l) {
    nums[i] = 0;
    i++;
  }
  // console.log(nums);
  return nums;
};

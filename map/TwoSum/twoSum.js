/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  let index1, index2;
  for (let i = 0; i < nums.length; i++) {
    let next_Target = target - nums[i];
    if (map.has(next_Target)) {
      index1 = i;
      index2 = map.get(next_Target);
    } else {
      map.set(nums[i], i);
    }
  }
  return [index1, index2];
};

console.log(twoSum([2, 7, 11, 15], 13));

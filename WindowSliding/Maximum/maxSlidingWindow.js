/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let i = 0,
    j = 0;
  let ans = [];
  const resultArr = [];
  while (j < nums.length) {
    //  remove all small number that comes before
    // nums[j] beacuse that are not useful
    // keep large element at front and rest small to next of them
    // if again get the max element then remove all small.
    while (ans.length > 0 && nums[j] > ans[ans.length - 1]) {
      ans.pop();
    }
    ans.push(nums[j]);
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      // add first element of answer array because that one will be max value.
      resultArr.push(ans[0]);
      // if first element of nums array is max then
      // remove first max element  and go for next window to
      // compare rest of element
      if (ans[0] === nums[i]) {
        ans.shift();
      }
      // keep window size constant
      i++;
      j++;
    }
  }
  return resultArr;
};

# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

- # Example 1:

1. Input: nums = [2,7,11,15], target = 9
2. Output: [0,1]
3. Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

- # Constraints:

1. 2 <= nums.length <= 104
2. -109 <= nums[i] <= 109
3. -109 <= target <= 109

- # pseudo code : -

1. create a map.
2. iterate over nums array and find next Target element which add to nus[i] and gives target
3. check next Target exist in map
   1. if not then set nus[i] to map and store element as key and index as value.
   2. if yes then get i and value of in map. map(get(nextTraget))

# Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]

- Constraints:

1. 0 <= nums.length <= 105
2. -109 <= nums[i] <= 109
3. nums is a non-decreasing array.
4. -109 <= target <= 109

# Approach

1. do the binary search
2. for first element, if arr[mid] === target
   1. then store the result in a variable
   2. then do e = mid - 1
3. for last element, if arr[mid] === target
   1. then store the result in a variable
   2. then do s = mid + 1
4. both first and last get in two different loop
   1. after finding either first or last
   2. make s = 0 and e = arr.length-1

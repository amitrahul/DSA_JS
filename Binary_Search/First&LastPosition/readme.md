# Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

- Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

- Constraints:

0 <= nums.length <= 105

-109 <= nums[i] <= 109

nums is a non-decreasing array.

-109 <= target <= 109

# Approach

1. find first and last position of element
2. for first occurence of Element
   1. if element is equal to target then
      1. compare arr[mid] === arr[mid-1] then we have to do searching in left part of array. so make e = mid - 1.
      2. if arr[mid] not equal to arr[mid-1] then we have to store the mid position in result and that would be the final answer. So to come out of loop increase (s++) and decrease (e--).
3. for last occurence of Element
   1. if element is equal to target then
      1. compare arr[mid] === arr[mid+1] then we have to do searching in right part of array. so make s = mid + 1.
      2. if arr[mid] not equal to arr[mid + 1] then we have to store the mid position in result and that would be the final answer. So to come out of loop increase (s++) and decrease (e--).
4. rest do binary search until found the target element inside the array.

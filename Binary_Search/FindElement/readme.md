# Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104

# Approach

- Approach #01

1. First find target is lie on which part of array
   1. if middle element is smaller than first element (arr[mid] < arr[0]) and target is greater than first element of array (arr[0] < target)
      then do e = mid - 1 , where e = arr.length-1
   2. else if middle element is greater than first element (arr[mid] >= arr[0]) and target is smaller than first element (arr[0] > target) then do
      s = mid + 1, where s = 0.
2. then do binary search on rest of subarray.

- Approach #02 ( using minelement index)

1. find the index of minimum element.By doing so we are able to divide the array into two subarray.
2. Now find the binary search of target element in both the subarray.
   1. binarySearch(arr,0,index-1,target); index = index of minelement
   2. binarySearch(arr, index ,arr.length-1 , target);
3. now if any subarray find the target then return that target index, else return -1;
   1. if only one element is present in the array then return 0 so for that
      check result of both binarysearch result >= 0.

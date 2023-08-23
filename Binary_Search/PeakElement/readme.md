# Find Peak Element

A peak element is an element that is strictly greater than its neighbors.
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

- Example

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

- Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.

# How to identify to apply as binary search : -

1. Here peak element means that element which is greater than it's neighbours element , (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) then
   in this case, arr[mid] is the peak element.
2. In this way we can get multiple peak element in array,so we have to return anyone of them.
3. from here itself, if we have to return anyone peak element so we can move any side of array if arr[mid] is not peak element and disregards other part of array.
4. In this way Binary search can be implemented here.

# Aproach

1. Check if (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) and also check ( mid > 0 && mid < arr.length - 1 ) if found then
   1. return mid as answer.
   2. check if arr[mid] < arr[mid-1] then we have to move to left part of array and search there itself , for that e = mid - 1.
   3. check if arr[mid] < arr [mid+1] tehn we have to move to right part of array and search there itself, for that s = mid + 1.
2. if above criteria is not satisfied that means element is present at any corner point of an array, that is the edge case of array.
   1. for corner element it(arr[mid]) is compared with any one of element beacuse it is present at first either last position of an array.
   2. so if mid is present at 0th position, mid === 0 then
      1. check if arr[mid] > arr[mid +1] then return mid, else mid + 1.
   3. so if mid is present at last position, mid === arr.length - 1 then
      1. check if arr[mid] > arr[mid - 1] then return mid, else mid - 1.

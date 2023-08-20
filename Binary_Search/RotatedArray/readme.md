# Find number of rotataion in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum number of rotation of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 3
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 4
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 0
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

# Intuition

minimum element is those element which is smaller than it's left and right.

# Approach

1. apply binary search
2. do the binary search on unsorted array
3. if found mid element smaller than it's left and right then return that mid element.
4. if mid element is greater than first element of array then move pointer of s = mid+1.
5. if mid element is less than last element then move the pointer of e = mid -1.
6. then apply searching on those unsorted array.

# Complexity

- Time complexity:
  O(logn)
- Space complexity:
  O(1)

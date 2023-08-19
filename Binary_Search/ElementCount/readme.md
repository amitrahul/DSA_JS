# Find the number of occurrences of an element in a sorted array

- Given a sorted array of n elements, possibly with duplicates, find the number of occurrences of the target element.

Example 1:
Input: arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42], target = 8
Output: 3

Example 2:
Input: arr = [3, 5, 5, 5, 5, 7, 8, 8], target = 6
Output: 0

Example 3:
Input: arr = [3, 5, 5, 5, 5, 7, 8, 8], target = 5
Output: 4

Expected O(logn) time solution.

# Approach

1. Find first and last index of an element and reduce it and add 1
   last - first + 1
2. For finding first index, do binary serach
   1. when target is equal to arr[mid] the
   2. store in a varaibale theafter
   3. e = mid - 1 , move index of e to 1 less than mid and do binary search on it.
3. For finding last index, do binary serach
   1. when target is equal to arr[mid] the
   2. store in a varaibale theafter
   3. s = mid + 1 , move index of s to 1 more than mid and do binary search on it.

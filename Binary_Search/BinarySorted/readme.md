# Find the index of first 1 in an infinite sorted array of 0s and 1s

Given an infinite sorted array consisting 0s and 1s. The problem is to find the index of first ‘1’ in that array. As the array is infinite, therefore it is guaranteed that number ‘1’ will be present in the array.

- Examples:

Input : arr[] = {0, 0, 1, 1, 1, 1}
Output : 2

Input : arr[] = {1, 1, 1, 1,, 1, 1}
Output : 0

# Approach

1. first need to find the range of array
   1. initalize s = 0 and e = 1.
   2. increase s and e, until (arr[e] < 1)
   3. s will occupy e position and e will double itself.
2. Now applied binary search here, need to take care of first occurrence
   1. for first occurrence, if arr[mid] === 1, then
   2. store mid to some variable and then after
   3. make e = mid -1 beacuse need to search on left side of subarray.
3. rest part applied binary search normally.

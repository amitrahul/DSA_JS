# Find the maximum element in an array which is first increasing and then decreasing

Given an array of integers which is initially increasing and then decreasing, find the maximum value in the array.

- Examples :

Input: arr[] = {8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1}
Output: 500
Input: arr[] = {1, 3, 50, 10, 9, 7, 6}
Output: 50
Corner case (No decreasing part)
Input: arr[] = {10, 20, 30, 40, 50}
Output: 50
Corner case (No increasing part)
Input: arr[] = {120, 100, 80, 20, 0}
Output: 120

# Approach

1. There are two corner case here, array can be increasing and decreasing or either increasing or decreasing.
   1. max element is at First index of array then handle if e === 1 and arr[mid] > arr[mid+1] then arr[mid] is the answer
   2. max element is the last element of array then at that point 's' point to the last element of array, (s=== arr.length-1) then arr[mid] is the answer
2. For max element in array, arr[mid] becomes maximum of arr[mid-1] and arr[mid+1]
3. if arr[mid] > arr[mid -1] or arr[mid] < arr[mid+1] then s = mid + 1 , in this way handle if max is at second index of array and help to do binary search.
4. if arr[mid] < arr[mid - 1] || arr[mid] > arr[mid + 1] then e = mid - 1.

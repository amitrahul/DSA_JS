# Ceiling in a sorted array

Given a sorted array and a value x, the ceiling of x is the smallest element in an array greater than or equal to x, and the floor is the greatest element smaller than or equal to x. Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and ceiling of x.

Examples :

For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 0: floor doesn't exist in array, ceil = 1
For x = 1: floor = 1, ceil = 1
For x = 5: floor = 2, ceil = 8
For x = 20: floor = 19, ceil doesn't exist in array

# Approach

1. Apply Binary search on it.
2. ceil of element means smallest element which is either equal to target or greater than target, in first example 0 is less than 1 so answer is 1, in 2nd one 5 is less than 8 so 8 is answer.
3. the concept is that answer is either target element itself or any min element which is greater than target element.
4. so answer lie between target to arr[arr.length-1] element.
5. if arr[mid] is greater than target then store it in a result
   1. then after do e = mid -1
6. if arr[mid] is smaller than target then do s = mid +1 beacuse in that side answer not lie so we don't have to do searching in that part of array.

# Floor in a Sorted Array

Given a sorted array and a value x, the floor of x is the largest element in the array smaller than or equal to x. Write efficient functions to find the floor of x

Examples:

Input: arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 5
Output: 2
Explanation: 2 is the largest element in
arr[] smaller than 5

Input: arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 20
Output: 19
Explanation: 19 is the largest element in
arr[] smaller than 20

Input : arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 0
Output : -1
Explanation: Since floor doesn’t exist, output is -1.

# Approach

1. Apply Binary search on it.
2. floor of element means max element which is either equal to target or less than target, in first example 2 is less than 5 so answer is 2, in 2nd one 19 is less than 20 so 19 is answer.
3. the concept is answer is either target element itself or any max element which is less than target element.
4. so answer lie between arr[0] to target element.
5. if arr[mid] is less than target then store it in a result
   1. then after do s = mid +1
6. if arr[mid] is greater than target then do e = mid - 1 beacuse in that side answer not lie so we don't have to do searching in that part of array.

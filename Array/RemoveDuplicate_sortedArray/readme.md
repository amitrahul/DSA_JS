# Remove Duplicates from Sorted Array

# Given an integer array nums sorted in non-decreasing order, remove the duplicates such that each unique element appears only once and return the new array.

Example 1:

Input: nums = [1,1,2]
Output: [1,2]
Explanation: Array after removing duplicates are [1,2]

Constraints:

    1 <= nums.length <= 3 ∗ 10^4
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.

- Pseudo code : - (solved using two pointer approach)

  1.  Array must be sorted.
  2.  take two iterator i and j with index value 0
  3.  iterate until j is less than array length => (j < arr.length)
  4.  First check if value at index i and j are equal ? => (arr[i]=== arr[j])

  - 1.  If they are equal then increase index j with 1. => (j++)

  5.  if Value at index i and j are not Equal then

  - 1.  First increase the index i with 1. => (i++)
    2.  put the value at index j to index i => (arr[i] = arr[j])

  6. process is repeated with step 4 and 5, until j < arr.length
  7. Now iteration is over , so change the length of array to i+1. => (arr.length = i+1)
  8. Return the array

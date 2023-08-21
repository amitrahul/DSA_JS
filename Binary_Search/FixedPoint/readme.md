# Find a Fixed Point (Value equal to index) in a given array

Given an array of n distinct integers sorted in ascending order, write a function that returns a Fixed Point in the array, if there is any Fixed Point present in array, else returns -1. Fixed Point in an array is an index i such that arr[i] is equal to i. Note that integers in array can be negative.

- Examples:
  Input: arr[] = {-10, -5, 0, 3, 7}
  Output: 3 // arr[3] == 3

  Input: arr[] = {0, 2, 5, 8, 17}
  Output: 0 // arr[0] == 0

  Input: arr[] = {-10, -5, 3, 4, 7, 9}
  Output: -1 // No Fixed Point

  # Approach

  1. if arr[mid] === mid, then return mid. beacuse here target element is index itself at which mid pointing to.
  2. else do binary search until or unless find element.

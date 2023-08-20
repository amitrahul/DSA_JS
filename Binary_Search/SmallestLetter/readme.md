# Smallest letter in sorted Array

Given an array of letters sorted in ascending order, find the smallest letter in the the array which is greater than a given key letter.

Example :

1. ["b", "c", "f", "h"], "h"
   it gives -1 beacuse next letter of h doesn't exist in array
2. ["b", "c", "f", "h"] , "f"
   it gives o/p as "h", beacuse next element of f is h
3. ["b", "c", "f", "h"], "a"
   it gives o/p as "b", beacuse next element of a is b
4. ["b", "c", "f", "h"], "d"
   it gives o/p as "f", beacuse next element of d is f

# Approach

1. apply same logic as ceil of element
2. only small change is that if arr[mid] is equal to target then return largets of next of that element if that exist in array.
3. so when arr[mid] === target then
   1. retur arr[mid + 1]
   2. or we can increase s = mid +1 and do the binary search in other part of array.
4. now rest logic is same as ceil of element logic.

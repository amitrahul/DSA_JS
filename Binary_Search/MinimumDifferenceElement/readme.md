# Minimum Difference Element in a Sorted Array

Given a sorted array, find the element in the array which has minimum difference with the given number.

- Example :-
  [1, 3, 8, 10, 15], 5 o/p 2 , 5- 3 = 2

# Approach : -

1. if arr[mid] is equal to key then
   1. absolute difference is 0 and that would be answer beacuse key is present in the array itself.
2. If array not present, need to handle it :-
   1. after applied binary search, every time e position is one less than s.
   2. In this way we get two element and between them answer lie.
   3. now take absolute difference with key element and return the minimum
      among them.
3. There are two edge cases that needs to handle :
   1. if key is larger than arr[e] then return key - arr[e]
   2. if key is smaller than arr[s] then return arr[s] - key

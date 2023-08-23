# FIND AN ELEMENT IN BITONIC ARRAY:

Given a bitonic sequence of n distinct elements, write a program to find a given element x in the bitonic sequence in O(log n) time.

- Examples :

Input : arr[] = {-3, 9, 18, 20, 17, 5, 1}, key = 20

Output : Found at index 3

Input : arr[] = {5, 6, 7, 8, 9, 10, 3, 2, 1}, key = 30

Output : Not Found

# Bitonic array

A Bitonic Sequence is a sequence of numbers which is first strictly increasing then after a point strictly decreasing.

# Approach : -

1. First divide the array into two part so that one becomes increasing order array and another subarray becomes decreasing order array.
2. So to dividing array we need to find out index of peak element.
3. then do binary search on two different subarray.

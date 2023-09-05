# Search in a row wise and column wise sorted matrix

Given an n x n matrix and an integer x, find the position of x in the matrix if it is present. Otherwise, return -1. Every row and column of the matrix is sorted in increasing order. The designed algorithm should have linear time complexity.

- Example
  Input: mat[4][4] = { {10, 20, 30, 40}, x = 29
  {15, 25, 35, 45},
  {27, 29, 37, 48},
  {32, 33, 39, 50}}

Output: Found at (2, 1)
Explanation: Element at (2,1) is 29

Input : mat[4][4] = { {10, 20, 30, 40}, x = 100
{15, 25, 35, 45},
{27, 29, 37, 48},
{32, 33, 39, 50}};

Output: Element not found
Explanation: Element 100 does not exist in the matrix

# Approach : -

1. Start do search element from right most corner of first row.
2. if key is less than right most corner element
   1. then all element below it become useless.
   2. so move the pointer in left direction or reduce column position by 1. (j--)
3. if key is greater than at it's current position then
   1. all left side element become useless.
   2. we have to move to lower part and do searching,for that increase row position by 1.
4. if key is found then return matrix index.

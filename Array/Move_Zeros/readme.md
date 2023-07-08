# Move Zeros

- "Given an array A[] of size N containing non-negative integers. You have to move all 0's to the end of array while maintaining the relative order of the non-zero elements.
  Note:
  You must do this in-place without making a copy of the array.
  Minimize the total number of operations."

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Explanation:

Constraints:
1 <= N <= 10^5 , 1 <= A[i] <= 10^5

- Pseudo code : (solved using two pointer approach)
  Approach #01(using swap)

1. take two iterator i and j with index value 0.
2. iterate until j is less than array length => (j < arr.length)
3. First check if value at index i and j are equal ? => (arr[i]=== arr[j])

- 1.  If they are equal then increase index j with 1. => (j++)

4.  if Value at index i and j are not Equal then

- 1.  First check value at index i is equal to zero => (arr[i] === 0)

  - 1.  if they are equal then swap the value of i and j => [nums[i], nums[j]] = [nums[j], nums[i]];

    2.  then after increment index of i to 1. => (i++)

  2. if the value at index is not equal. => (arr[i] !== 0)
     - 1. then increment index of i to 1. => (i++);

5. return the array.

Approach #02 (replace zero value to non zero value )

1. take two iterator i and j with index value 0.
2. iterate until j is less than array length => (j < arr.length)
3. check value at index j is not equal to zero. => (arr[j] !== 0)
   - 1. if value is non-zero value then
     2. put the value at index j to value at index i . => (arr[i] = arr[j])
     3. Increment index of i to 1. => (i++)
4. Increment index of j to 1. => (j++)
5. iterate i upto less than array length ,to put zero to rest of the value.
   - 1. put rest value at i index to zero
     2. Increment i to 1 . => (i++)
6. Return the array.

# Search in an almost sorted array

Given a sorted array arr[] of size N, some elements of array are moved to either of the adjacent positions, i.e., arr[i] may be present at arr[i+1] or arr[i-1] i.e. arr[i] can only be swapped with either arr[i+1] or arr[i-1]. The task is to search for an element in this array.

Examples :

Input: arr[] = {10, 3, 40, 20, 50, 80, 70}, key = 40
Output: 2
Explanation: Output is index of 40 in given array i.e. 2

Input: arr[] = {10, 3, 40, 20, 50, 80, 70}, key = 90
Output: -1
Explanation: -1 is returned to indicate the element is not present

# Approach

Time complexity: O(logN)
Auxiliary Space: O(1)

1. Apply Binary search on it.
2. when mid element of array is finded out three conditions needs to check

   1. when mid element of array is equal to target the return mid index.
   2. when get mid index element, it should compare with mid- 1 element too
      and here also need to check mid - 1 >= s to avoid array out of bound index.
   3. when get mid index element, it should compare with mid + 1 element too and here also need to check mid + 1 <= e to avoid array out of bound index.

3. when mid element is greater than target then this time reduce e = mid - 2 ,beacuse here we have checked next element in above step itself.
4. when mid element is smaller than target then this time add s = mid + 2 ,beacuse here we have checked previous element in above step itself.

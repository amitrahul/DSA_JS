For doing Binary Search, array must be in sorted order.

- Finding mid in this way help ineteger or number to not overflow
  let mid = s + Math.floor((e - s) / 2);

* Approach :-

1. intialize two pointer , s = 0 and e = arr.length-1
2. in while loop do the operation until s <= e, it means both point to same array element.
3. find the mid index of the array
4. match the arr element at mid index is equal to target or not
   1. if matched then return mid(index);
5. if arr element at mid index is greater than target
   1. then make e to mid - 1, beacuse all the element righ side of mid become useless.
6. if arr element at mid index is less than target
   1. then make s to mid + 1, beacuse all the element left side of mid become useless.
7. if element not found return -1.

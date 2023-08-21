# Find position of an element in a sorted array of infinite numbers

# Approach

Since array is sorted, the first thing clicks into mind is binary search, but the problem here is that we don’t know size of array.

If the array is infinite, that means we don’t have proper bounds to apply binary search. So in order to find position of key, first we find bounds and then apply binary search algorithm.

Let low be pointing to 1st element and high pointing to 2nd element of array, Now compare key with high index element,

1. start giving index as s = 0 and e = 1
2. now we have to move e until we get the value of arr[e] >= target along with that move staring index(s) too.
   1. for first give position of e to s. (s = e)
   2. then make position of e to double of itself. (e \*= 2)
3. by doing so we get s and e index. now apply binary search on that part of array.

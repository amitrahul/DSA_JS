/**                         Swap Array
 *
 * Given an array of integers, write a function to sort the array in such a way
 * that all even elements appear first, followed by all odd elements.
 * You are not allowed to use any in-built sorting functions or extra arrays.
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const recoverArray = (arr) => {
  // Your code goes here
  const result = [];
  let l = 0,
    r = arr.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l <= mid && r > mid) {
    if (arr[r] % 2 === 0) result.push(arr[r]);
    if (arr[l] % 2 === 0) result.push(arr[l]);
    l++;
    r--;
  }
  l -= 1;
  r += 1;
  while (l >= 0 && r < arr.length) {
    if (arr[r] % 2 !== 0) result.push(arr[r]);
    if (arr[l] % 2 !== 0) result.push(arr[l]);
    l--;
    r++;
  }
  // console.log(result)
  return result;
};

const r = recoverArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(r);
//  [8,2,6,4,5,3,7,1]

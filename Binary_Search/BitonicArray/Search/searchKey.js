/**                     Search a key in Bitonic array                             */
/* Finding peak element index, so that can ne divide array
on the basis of it
*/
const peakElement = (arr) => {
  let s = 0,
    e = arr.length - 1,
    n = arr.length;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (mid > 0 && mid < n - 1) {
      if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
      else if (arr[mid] < arr[mid - 1]) e = mid - 1;
      else s = mid + 1;
    } else {
      if (mid === 0) return arr[mid] > arr[mid + 1] ? mid : mid + 1;
      else if (mid === n - 1) return arr[mid] > arr[mid - 1] ? mid : mid - 1;
    }
  }
};
/** Binary search on Increasing order array */
const binarySearchIncreArr = (arr, s, e, key) => {
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === key) return mid;
    else if (arr[mid] > key) e = mid - 1;
    else s = mid + 1;
  }
  return -1;
};
/** Binary Search on decreasing order array */
const binarySearchDecArr = (arr, s, e, key) => {
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] > key) s = mid + 1;
    else e = mid - 1;
  }
  return -1;
};

const searchKey = (arr, key) => {
  let peakIndex = peakElement(arr);
  let index1 = binarySearchIncreArr(arr, 0, peakIndex - 1, key);
  let index2 = binarySearchDecArr(arr, peakIndex, arr.length - 1, key);

  return index1 >= 0 ? index1 : index2 >= 0 ? index2 : -1;
};

let result = searchKey([1, 3, 8, 10, 12, 4, 2], 4);
console.log(result); // 5

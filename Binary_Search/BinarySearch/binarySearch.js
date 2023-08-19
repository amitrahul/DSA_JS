/**
 *  Ascending order array
 * [4,5,6,7,11,34,56]
 */
const binarySearch = (arr, target) => {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return -1;
};

/**                    Descending Order array
 *
 * Here only  s = mid+1, on arr[mid] > target
 * [20,17,15,14,13,12,10,9,8,4]
 */
const binarySearch1 = (arr, target) => {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};

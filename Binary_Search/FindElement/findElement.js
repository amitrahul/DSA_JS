/* Finding the element in rotated sorted array */
// This is better and optimized
const findElement = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    n = arr.length;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] < arr[0] && arr[0] <= target) {
      e = mid - 1;
    } else if (arr[mid] >= arr[0] && arr[0] > target) {
      s = mid + 1;
    } else {
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
  }
  return -1;
};

console.log(findElement([4, 5, 6, 7, 0, 1, 2], 6));

/*****************************************************************************/
//Approach #02 (using min element)

const minIndex = (arr) => {
  let s = 0,
    e = arr.length - 1,
    n = arr.length;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    let prev = (mid + n - 1) % n;
    let next = (mid + 1) % n;
    if (arr[prev] > arr[mid] && arr[next] > arr[mid]) return mid;
    else if (arr[mid] <= arr[e]) e = mid - 1;
    else if (arr[mid] >= arr[s]) s = mid + 1;
  }
  return -1;
};

const binarySearch = (arr, s, e, target) => {
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) e = mid - 1;
    else s = mid + 1;
  }
  return -1;
};

const findElement1 = (arr, target) => {
  let index = minIndex(arr);
  let subarr1 = binarySearch(arr, 0, index - 1, target);
  let subarr2 = binarySearch(arr, index, arr.length - 1, target);
  return subarr1 >= 0 ? subarr1 : subarr2 >= 0 ? subarr2 : -1;
};
console.log(findElement1([4, 5, 6, 7, 0, 1, 2], 6));

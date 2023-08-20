/*        ceil means Smallest element greater than target      */
const ceilElement = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    result = -1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] < target) {
      s = mid + 1;
    } else {
      result = arr[mid];
      e = mid - 1;
    }
  }
  return result;
};

console.log(ceilElement([1, 2, 3, 4, 8, 10, 10, 12, 19], 17));

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

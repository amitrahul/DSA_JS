const floorElement = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    result = -1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] < target) {
      result = arr[mid];
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return result;
};

console.log(floorElement([1, 2, 8, 10, 10, 12, 19], 0)); // -1

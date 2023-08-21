const infinite = (arr, target) => {
  let s = 0,
    e = 1;
  while (target > arr[e]) {
    s = e;
    e *= 2;
  }
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

const res = infinite([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10);
console.log(res);

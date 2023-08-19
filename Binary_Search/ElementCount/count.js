const count = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    first = -1,
    last = -1,
    count = 0;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      first = mid;
      e = mid - 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  (s = 0), (e = arr.length - 1);
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      last = mid;
      s = mid + 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  count = last - first + 1;
  return count > 0 ? count : 0;
};

console.log(count([2, 4, 10, 18, 18, 18, 20], 18));

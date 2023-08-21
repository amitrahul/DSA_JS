const fixedPoint = (arr) => {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === mid) return mid;
    else if (arr[mid] > mid) e = mid - 1;
    else s = mid + 1;
  }
  return -1;
};

console.log(fixedPoint([-4, -2, 0, 1, 4, 6, 7]));

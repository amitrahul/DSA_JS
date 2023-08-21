const firstPosition = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    first = -1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      if (arr[mid] === arr[mid - 1]) {
        e = mid - 1;
      } else {
        first = mid;
        s++;
        e--;
      }
    } else if (arr[mid] > target) e = mid - 1;
    else s = mid + 1;
  }
  return first;
};
const lastPosition = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    last = -1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      if (arr[mid] === arr[mid + 1]) {
        s = mid + 1;
      } else {
        last = mid;
        s++;
        e--;
      }
    } else if (arr[mid] > target) e = mid - 1;
    else s = mid + 1;
  }
  return last;
};
const firstLast = (arr, target) => {
  const fPos = firstPosition(arr, target);
  const lPos = lastPosition(arr, target);
  return [fPos, lPos];
};

const res = firstLast([-1, 1, 2, 2, 2, 2, 2, 2, 5, 6, 12, 12], 2);
console.log(res);

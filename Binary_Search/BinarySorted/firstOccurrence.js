const firstOccurrence = (arr) => {
  let s = 0,
    e = 1,
    result = -1;
  while (arr[e] < 1) {
    s = e;
    e *= 2;
  }

  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === 1) {
      result = mid;
      e = mid - 1;
    } else if (arr[mid] > 1) e = mid - 1;
    else s = mid + 1;
  }
  return result;
};

let res = firstOccurrence([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]);
console.log(res);

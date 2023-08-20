const smallestLetter = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    result = -1;
  if (arr[e] === target) return result;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      //   return arr[mid + 1];
      //   or (can apply anyone of them)
      s = mid + 1;
    } else if (arr[mid] < target) {
      s = mid + 1;
    } else {
      result = arr[mid];
      e = mid - 1;
    }
  }
  return result;
};

console.log(smallestLetter(["b", "c", "f", "h"], "d"));

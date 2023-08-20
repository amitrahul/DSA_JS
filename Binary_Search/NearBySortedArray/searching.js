const searching = (arr, target) => {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid - 1] === target && mid - 1 >= s) {
      return mid - 1;
    } else if (arr[mid + 1] === target && mid + 1 <= e) {
      return mid + 1;
    } else if (arr[mid] > target) {
      e = mid - 2;
    } else {
      s = mid + 2;
    }
  }
  return -1;
};

let res = searching([10, 3, 40, 20, 50, 80, 70], 50);
console.log(res);

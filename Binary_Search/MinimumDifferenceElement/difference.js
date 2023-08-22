const minDifference = (arr, key) => {
  let s = 0,
    e = arr.length - 1;
  if (arr[e] < key) return key - arr[e];
  else if (arr[s] > key) return arr[s] - key;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === key) {
      return arr[mid] - key;
    } else if (arr[mid] > key) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return Math.min(Math.abs(key - arr[e]), Math.abs(arr[s] - key));
};

console.log(minDifference([1, 3, 8, 10, 15], 5));

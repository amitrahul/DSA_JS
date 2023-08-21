const maximum = (arr) => {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    // corner case
    if (s === arr.length - 1) return arr[mid];
    if (e === 1 && arr[mid] > arr[e]) return arr[mid];
    // rest part
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return arr[mid];
    else if (arr[mid] > arr[mid - 1] || arr[mid] < arr[mid + 1]) s = mid + 1;
    else if (arr[mid] < arr[mid - 1] || arr[mid] > arr[mid + 1]) e = mid - 1;
  }
};

console.log(maximum([8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1]));

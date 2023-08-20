const rotated = (arr) => {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    /**
     * this is doing so beacuse when mid is on last index of array
     * then next element should point to the first element of array
     * it should not go beyound array(array out of bound)
     * next = (mid + 1) % arr.length
     *
     * previous = (mid + arr.length - 1) % arr.length
     */
    let next = (mid + 1) % arr.length;
    let prev = (mid + arr.length - 1) % arr.length;

    if (arr[mid] < arr[next] && arr[prev] > arr[mid]) {
      return mid;
    } else if (arr[e] >= arr[mid]) {
      e = mid - 1;
    } else if (arr[s] <= arr[mid]) {
      s = mid + 1;
    }
  }
  return 0;
};

console.log(rotated([4, 5, 6, 7, 0, 1, 2]));

/*
here if arr[e] >= arr[mid] will compare first otherwise it will fail
for half number of rotation of array of length.
like [11,12,15,18,2,5,6,8]

*/

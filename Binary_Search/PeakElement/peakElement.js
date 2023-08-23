/* In this case multiple peak element can be present inside array,
 so we have to return any one of them onplay, that's why able to traverse
 to any one side of an Array.
*/
const peakElement = (arr) => {
  let s = 0,
    e = arr.length - 1,
    n = arr.length;
  if (n === 1) return 0;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    // check mid is greater than both edge of array
    if (mid > 0 && mid < n - 1) {
      if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
      else if (arr[mid] > arr[mid - 1]) s = mid + 1;
      else e = mid - 1;
    }
    // now check for edge case
    else {
      if (mid === 0) {
        if (arr[mid] > arr[mid + 1]) return mid;
        else return mid + 1;
      } else if (mid === n - 1) {
        if (arr[mid] > arr[mid - 1]) return mid;
        else return mid - 1;
      }
    }
  }
};

console.log(peakElement([-2, -1]));

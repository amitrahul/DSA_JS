/*
Bitonic array are those array which increasing first then decreasing where
arr[i] !== arr[i+1]
this problem is same as Peak element of array.
* An array is said to be bitonic if it has an increasing sequence of integers followed immediately by a decreasing sequence of integers.
*/
const maxValue = (arr) => {
  let s = 0,
    e = arr.length - 1,
    n = arr.length;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return arr[mid];
    else if (arr[mid] < arr[mid + 1] && nums[mid] > nums[mid - 1]) s = mid + 1;
    else if (arr[mid] < arr[mid - 1] && nums[mid] > nums[mid + 1]) e = mid - 1;
  }
  return -1;
};

console.log(maxValue([1, 4, 8, 3, 2]));

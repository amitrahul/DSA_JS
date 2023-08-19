/**
 * find the first and last Occurence of an element
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

/* First occurrence   */

const firstoccurrence = (arr, target) => {
  let s = 0,
    e = arr.length - 1;
  let first = -1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      first = mid;
      e = mid - 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return first;
};

console.log(firstoccurrence([2, 4, 10, 10, 10, 10, 10, 10, 18, 20], 10));

/************************************************************************** */

/*  Last occurrence */

const lastOccurrence = (arr, target) => {
  let s = 0,
    e = arr.length - 1;
  let last = -1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      last = mid;
      s = mid + 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return last;
};

console.log(lastOccurrence([2, 4, 10, 10, 10, 10, 10, 10, 18, 20], 10));

/**  Find First and Last Position of Element in Sorted Array   */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const occurrence = (arr, target) => {
  let s = 0,
    e = arr.length - 1,
    first = -1,
    last = -1;
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      first = mid;
      e = mid - 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  (s = 0), (e = arr.length - 1);
  while (s <= e) {
    let mid = s + Math.floor((e - s) / 2);
    if (arr[mid] === target) {
      last = mid;
      s = mid + 1;
    } else if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return [first, last];
};

console.log(occurrence([-12, -10, -7, -7, -7, 7, 9, 12, 56], -7));

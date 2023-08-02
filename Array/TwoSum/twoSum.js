const two_Sum = (arr, target) => {
  arr.sort((a, b) => a - b);
  const ans = [];
  let i = 0,
    j = arr.length - 1;
  while (i <= j) {
    if (arr[i] + arr[j] === target) {
      ans.push([arr[i], arr[j]]);
      i++;
      j++;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return ans;
};

console.log(two_Sum([3, 5, 5, 6, 6, 7, 9, 10, 10], 15));
/*
o/p :-
0 : (2) [5, 10]
1 : (2) [5, 10]
2 : (2) [6, 9]
3 : (2) [6, 9]
*/

// ******************************************************** */
// handle multipe duplicate
const twoSum1 = (arr, target) => {
  const ans = [];
  arr.sort((a, b) => a - b);
  let i = 0,
    j = arr.length - 1;
  while (i <= j) {
    if (arr[i] + arr[j] === target) {
      ans.push([arr[i], arr[j]]);
      let temp = arr[i];
      while (i <= j && temp === arr[i]) i++;
      let temp2 = arr[j];
      while (i <= j && temp2 === arr[j]) j--;
    } else if (arr[i] + arr[j] < target) {
      let temp1 = arr[i];
      while (i <= j && arr[i] === temp1) i++;
    } else {
      let temp2 = arr[j];
      while (i <= j && arr[j] === temp2) j--;
    }
  }
  return ans;
};

console.log(twoSum1([3, 5, 5, 6, 6, 7, 9, 10, 10], 15));
/*
o/p : 
0: (2) [5, 10]
1: (2) [6, 9]
*/

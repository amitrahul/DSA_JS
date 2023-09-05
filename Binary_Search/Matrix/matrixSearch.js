const matrixSearch = (arr, key) => {
  if (arr.length === 0) return -1;
  let i = 0,
    j = arr.length - 1;
  while (i < arr.length && j > 0) {
    if (arr[i][j] === key) return [i, j];
    else if (arr[i][j] > key) {
      j--;
    } else if (arr[i][j] < key) {
      i++;
    }
  }
  return -1;
};

const mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
console.log(matrixSearch(mat, 37));

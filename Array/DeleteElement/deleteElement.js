/**
 * Delete an elemet of an array at any particular index
 * here delete element at j index.
 */

const deleteAnElement = (arrList, j) => {
  let position = j;
  for (let i = position; i < arrList.length; i++) {
    arrList[i] = arrList[i + 1];
  }
  arrList.length = arrList.length - 1;
  return arrList;
};

console.log(deleteAnElement([9, 3, 7, 5, 6, 8, 2, 1], 4));

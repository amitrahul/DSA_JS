/**
 * Insert a new element into an array, at any particular index.
 *
 */

const insertion = (arrList, j, newElement) => {
  let position = j;
  for (let i = arrList.length - 1; i >= position; i--) {
    arrList[i + 1] = arrList[i];
    if (i === position) arrList[position] = newElement;
  }
  return arrList;
};

console.log(insertion([2, 5, 7, 19, 6], 3, 13));

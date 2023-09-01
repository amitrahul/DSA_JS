/**
  Groups array elements based on their values.
  Object.values() --> it gives an array with all values of object.
 */

const grouppingElemets = (arrList) => {
  const obj = {};
  for (let element of arrList) {
    if (obj[element]) obj[element].push(element);
    else obj[element] = [element];
  }
  return Object.values(obj);
};

console.log(grouppingElemets([4, 5, 6, 7, 5, 4, 7]));
//  O/p : [ [ 4, 4 ], [ 5, 5 ], [ 6 ], [ 7, 7 ] ]

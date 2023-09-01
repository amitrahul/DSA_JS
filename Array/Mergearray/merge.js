const merge = (arrList1, arrList2) => {
  const arrList = [];
  for (let i = 0; i < arrList1.length; i++) {
    arrList[i] = arrList1[i];
  }

  for (let i = 0; i < arrList2.length; i++) {
    arrList[arrList1.length + i] = arrList2[i];
  }
  return arrList;
};

console.log(merge([12, 15, 18], [14, 18, 34]));

reverseArray = (array) => {
  let reverseArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArr.push(array[i]);
  }
  return reverseArr;
};

let arr = [
  1, 2, 22, 900, 6, 7, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
console.log(reverseArray(arr));

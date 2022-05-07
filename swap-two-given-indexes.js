const swapNum = (array, first, second) => {
  let c = array[first - 1];
  array[first - 1] = array[second - 1];
  array[second - 1] = c;
  return array;
};

let arr = [
  1, 2, 22, 900, 6, 7, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
firstIndex = 3;
secondIndex = 5;
console.log(swapNum(arr, firstIndex, secondIndex));

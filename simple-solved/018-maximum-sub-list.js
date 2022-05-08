const maxSubList = (array) => {
  let currentSum = 0;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    currentSum = Math.max(currentSum + currentNum, 0);
    max = Math.max(currentSum, max);
  }
  return max;
};
let arr = [
  1, 2, 22, 900, 6, 7, -1, 0, -900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
let array = [-2, -1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubList(arr));

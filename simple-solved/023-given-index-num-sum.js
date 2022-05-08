const givenIndexNumSum = (array, first, second) => {
  let sum = 0;
  for (let i = first - 1; i < second; i++) {
    sum = sum + array[i];
  }
  // console.log(sum);
  return sum;
};
let arr = [
  1, 3, 22, 900, 6, 7, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
let firstNumIndex = 3;
let secondNumIndex = 5;
console.log(givenIndexNumSum(arr, firstNumIndex, secondNumIndex));

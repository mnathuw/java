const maxEven = (array) => {
  let c = array[0];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && c < array[i]) {
      c = array[i];
      index = i;
    }
  }
  return c;
};
let arr = [
  1, 2, 22, 900, 6, 7, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
console.log(maxEven(arr));

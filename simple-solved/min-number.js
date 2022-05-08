const minNum = (array) => {
  let min = array[0];
  let min_index = 0;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      min_index = i;
    }
  }
  // console.log("min = ", min);
  // console.log("min_index = ", min_index);
  return "min = " + min + "\nmin_index = " + min_index;
};
let arr = [
  1, 2, 22, 100, 6, 7, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
console.log(minNum(arr));

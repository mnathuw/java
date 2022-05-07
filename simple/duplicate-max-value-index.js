const duplicate = (array) => {
  let max = array[0];
  let max_index = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (duplicate[i] == duplicate[j]) {
      }
    }
    if (max < array[i]) {
      max = array[i];
      max_index = i;
    }
  }
  return "max = " + max + "\nmax_indexes = " + max_index;
};
let arr = [
  1, 2, 22, 900, 6, 7, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
console.log(duplicate(arr));

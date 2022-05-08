const findIndexOfPrime = (num) => {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (num === array[i]) {
      index = i;
    }
  }
  return index;
};

console.log(findIndexOfPrime(17));

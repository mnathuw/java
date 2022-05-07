const isPrime = (number) => {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
};
const filterPrime = (arr) => {
  let prime = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      prime.push(arr[i]);
    }
  }
  return prime;
};
let arr = [
  1, 2, 22, 900, 6, 7, 13, -1, 0, 900, 80, -20, 12, 1, 4, 5, 22, 70, 5, 2, 3,
];
console.log(filterPrime(arr));

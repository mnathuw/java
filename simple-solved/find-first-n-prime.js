const isPrime = (n) => {
  if (n <= 1) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
};
const getNprimes = (n) => {
  const arr = [];
  let i = 2;
  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};

let n = 10;
console.log(getNprimes(10));

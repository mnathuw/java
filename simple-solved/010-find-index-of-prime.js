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
const filterPrime = (number) => {
  let prime = [];
  for (let i = 2; i < number + 1; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
};
const findIndexOfPrime = (number) => {
  if (!isPrime(number)) {
    return "None";
  }
  let primes = filterPrime(number);
  return primes.length;
};

console.log(findIndexOfPrime(13));

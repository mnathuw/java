const primeFactorizator = (n) => {
  let factors = [];
  let div = 2;
  while (n > 2) {
    if (n % div == 0) {
      factors.push(div);
      n = n / div;
    } else {
      div++;
    }
  }
  return factors;
};
let number = 240;
console.log(primeFactorizator(number));

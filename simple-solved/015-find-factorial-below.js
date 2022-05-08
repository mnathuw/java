const findFactorialBelow = (n) => {
  let fact = 1;
  let result = [];
  let i = 1;
  while (fact <= n) {
    result.push(fact);
    fact = fact * i;
    i++;
  }
  return result;
};
console.log(findFactorialBelow(100));

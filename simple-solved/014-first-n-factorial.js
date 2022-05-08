const firstNFactorial = (n) => {
  let first = 1;
  result = [];
  for (let i = 1; i < n; i++) {
    first = first * i;
    result.push(first);
  }
  return result;
};

console.log(firstNFactorial(7));

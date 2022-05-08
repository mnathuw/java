const findFirstNFibonacci = (n) => {
  let f1 = 0;
  let f2 = 1;
  if (n < 1) {
    return 0;
  } else {
    for (let i = 1; i < n; i++) {
      let next = f1 + f2;
      f1 = f2;
      f2 = next;
    }
    return f2;
  }
};

console.log(findFirstNFibonacci(3));

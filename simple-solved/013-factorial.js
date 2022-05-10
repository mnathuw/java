const factorial = (num) => {
  let fact = 1;
  if (num < 0) {
    throw new Error("No greatest common divisor");
  } else if (num == 0) {
    return fact;
  } else {
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }
};

const num = 3;
console.log(factorial(-1));

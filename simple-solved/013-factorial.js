const factorial = (num) => {
  let fact = 1;
  if (num < 0) {
    return "Negative number are not allowed";
  } else if (num == 0) {
    return fact;
  } else {
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }
};

let num = 3;
console.log(factorial(num));

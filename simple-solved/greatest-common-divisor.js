// const primeFactorizator = (n) => {
//   let factors = [];
//   let div = 2;
//   while (n > 2) {
//     if (n % div == 0) {
//       factors.push(div);
//       n = n / div;
//     } else {
//       div++;
//     }
//   }
//   return factors;
// };
const greatestCommonDiv = (num1, num2) => {
  if (num1 === 0 && num2 === 0) {
    return "No greatest common divisor";
  } else if (num1 === 0 && num2 !== 0) {
    return num2;
  } else if (num2 === 0 && num1 !== 0) {
    return num1;
  } else {
    while (num1 != num2) {
      if (num1 > num2) {
        num1 = num1 - num2;
      } else {
        num2 = num2 - num1;
      }
    }
    return num1;
  }
};
console.log(greatestCommonDiv(1, 2));

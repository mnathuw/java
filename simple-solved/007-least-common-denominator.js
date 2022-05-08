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
const leastCommonDenominator = (num1, num2) => {
  let lcd = (num1 * num2) / greatestCommonDiv(num1, num2);
  return lcd;
};

console.log(leastCommonDenominator(122, 48));

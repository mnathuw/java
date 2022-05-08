const linearEquation = (a, b) => {
  let x;
  let discriminant = -b / a;
  if (a === 0 && b !== 0) {
    return "No root";
  } else if (a === 0 && b === 0) {
    return "Infinitely many roots";
  } else {
    return discriminant;
  }
};

let a = 1;
let b = 2;
console.log(linearEquation(a, b));

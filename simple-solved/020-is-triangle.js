const distance = (d1, d2) => {
  return Math.sqrt((d1[0] - d2[0]) ** 2 + (d1[1] - d2[1]) ** 2);
};

const isTriangle = (d1, d2, d3) => {
  let a = distance(d1, d2);
  let b = distance(d2, d3);
  let c = distance(d3, d1);
  if (a < b + c && b < a + c && c < a + b) {
    if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      return "right-angled triangle";
    } else if (a == b && b == c) {
      return "equilateral triangle";
    } else if (a == b || b == c || a == c) {
      return "isosceles triangle";
    } else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    ) {
      return "obtuse triangle";
    } else {
      return "acute triangle";
    }
  } else {
    return "Not a triangle";
  }
};
let d1 = [2, 2];
let d2 = [2, 4];
let d3 = [4, 5];
console.log(isTriangle(d1, d2, d3));

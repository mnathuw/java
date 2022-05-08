const isTriangle = (a, b, c) => {
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
console.log(isTriangle(3, 4, 5));

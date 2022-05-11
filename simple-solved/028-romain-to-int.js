const romanToInt = (s) => {
  const romain = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (i = 0; i < s.length; i++) {
    const current = romain[s[i]];
    //console.log(cur);
    const next = romain[s[i + 1]];
    //console.log(next);

    if (current < next) {
      result += next - current; // IV -> 5 - 1 = 4
      i++;
    } else {
      result += current;
    }
  }

  return result;
};

console.log(romanToInt("IX"));

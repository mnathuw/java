const isPalindrome = (sentence) => {
  for (let i = 0; i < sentence.length / 2; i++) {
    if (sentence[i] !== sentence[sentence.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(12321));

const wordsFound = (sentence) => {
  let wordsFound = 1;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      wordsFound++;
    }
  }
  return wordsFound;
};

let sentence = "hello how are?";
console.log(wordsFound(sentence));

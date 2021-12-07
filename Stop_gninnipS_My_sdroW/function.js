function spinWords(string) {
  let words = string.split(" ");
  let reversedWords = words.map((word) => reverseBigs(word));
  return reversedWords.join(" ");
}

function reverseBigs(string) {
  if (string.length > 4) return reverse(string);
  return string;
}

function reverse(string) {
  let revArr = string.split("");
  return revArr.reverse().join("");
}

module.exports = spinWords;

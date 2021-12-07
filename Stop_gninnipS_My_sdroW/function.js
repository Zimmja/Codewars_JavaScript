function spinWords(string) {
  if (string.length > 4) return reverse(string);
  return string;
}

function reverse(string) {
  let revArr = string.split("");
  return revArr.reverse().join("");
}

module.exports = spinWords;

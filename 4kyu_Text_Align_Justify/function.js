function justify(str, len) {
  let words = str.split(" ");
  let wordLengths = words.map((word) => word.length);
  if (wordLengths.length === 1) return str;
  let spaceRequired = len - sumArr(wordLengths);
  return words.join(spaces(spaceRequired));
}

function spaces(count) {
  return new Array(count + 1).join(" ");
}

function sumArr(arr) {
  return arr.reduce((a, b) => a + b);
}

module.exports = justify;

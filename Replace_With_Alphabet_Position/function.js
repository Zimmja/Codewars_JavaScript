function alphabetPosition(text) {
  let letters = text.split(" ");
  let numbers = letters.map((letter) => {
    return getLetterPosition(letter);
  });
  return numbers.join(" ");
}

function getLetterPosition(letter) {
  let alphPos = "abcdefghijklmnopqrstuvwxyz".split("");
  return `${alphPos.indexOf(letter) + 1}`;
}

module.exports = alphabetPosition;

alphabetPosition("z");
alphabetPosition("a");

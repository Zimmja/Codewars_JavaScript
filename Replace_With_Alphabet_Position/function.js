function alphabetPosition(text) {
  let letters = text.split("");
  let numbers = convertLettersToNumbers(letters);
  return filterAndJoin(numbers);
}

function filterAndJoin(numbers) {
  let filtered = numbers.filter((number) => number != "");
  return filtered.join(" ");
}

function convertLettersToNumbers(letters) {
  return letters.map((letter) => {
    return getLetterPosition(letter.toLowerCase());
  });
}

function getLetterPosition(letter) {
  let alphPos = "abcdefghijklmnopqrstuvwxyz".split("");
  if (!alphPos.includes(letter)) return "";
  return `${alphPos.indexOf(letter) + 1}`;
}

module.exports = alphabetPosition;

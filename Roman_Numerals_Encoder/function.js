const solution = (number) => {
  numeral = [];
  if (number >= 10) {
    number -= 10;
    numeral.push("X");
  }
  let smallNums = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  numeral.push(smallNums[number]);
  return numeral.join("");
};

module.exports = solution;

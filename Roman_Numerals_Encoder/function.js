const solution = (number) => {
  numeral = [];
  if (number >= 10) {
    symMult = parseInt(number / 10);
    number -= symMult * 10;
    for (i = symMult; i > 0; i--) {
      numeral.push("X");
    }
  }
  let smallNums = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  numeral.push(smallNums[number]);
  return numeral.join("");
};

module.exports = solution;

solution(20);

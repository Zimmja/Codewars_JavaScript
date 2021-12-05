const solution = (number) => {
  numeral = [];
  if (number >= 10) {
    divisions = parseInt(number / 10);
    numeral.push(get10numeral(number, divisions));
    number -= divisions * 10;
  }
  let smallNums = numeralRange("I", "V", "X");
  numeral.push(smallNums[number]);
  return numeral.join("");
};

const get10numeral = (number, divisions) => {
  divis10 = parseInt(number / 10);
  divis10range = numeralRange("X", "L", "C");
  return divis10range[divisions];
};

const numeralRange = (min, mid, max) => {
  return [
    "",
    `${min}`,
    `${min}${min}`,
    `${min}${min}${min}`,
    `${min}${mid}`,
    `${mid}`,
    `${mid}${min}`,
    `${mid}${min}${min}`,
    `${mid}${min}${min}${min}`,
    `${min}${max}`,
  ];
};

module.exports = solution;

get10numeral(40);

// const solution = (number) => {
//   // numeral = [];
//   // if (number >= 100) {
//   //   let divisions = parseInt(number / 100);
//   //   numeral.push(getNumeral(divisions, ["C", "D", "M"]));
//   //   number -= divisions * 100;
//   // }
//   // if (number >= 10) {
//   //   let divisions = parseInt(number / 10);
//   //   numeral.push(getNumeral(divisions, ["X", "L", "C"]));
//   //   number -= divisions * 10;
//   // }
//   // let divisions = parseInt(number / 1);
//   // numeral.push(getNumeral(divisions, ["I", "V", "X"]));
//   // number -= divisions * 1;
//   // return numeral.join("");
// };

// const getNumeral = (divisions, nEls) => {
//   let range = numeralRange(nEls[0], nEls[1], nEls[2]);
//   return range[divisions];
// };

// const numeralRange = (min, mid, max) => {
//   return [
//     "",
//     `${min}`,
//     `${min}${min}`,
//     `${min}${min}${min}`,
//     `${min}${mid}`,
//     `${mid}`,
//     `${mid}${min}`,
//     `${mid}${min}${min}`,
//     `${mid}${min}${min}${min}`,
//     `${min}${max}`,
//   ];
// };

class Numeral {
  constructor(number) {
    this.number = number;
    this.numeral = [];
    this.begin();
  }

  getNumeralVal = () => {
    return this.numeral.join("");
  };

  begin = () => {
    if (this.number >= 100) {
      let divisions = parseInt(this.number / 100);
      this.numeral.push(this.getNumeral(divisions, ["C", "D", "M"]));
      this.number -= divisions * 100;
    }
    if (this.number >= 10) {
      let divisions = parseInt(this.number / 10);
      this.numeral.push(this.getNumeral(divisions, ["X", "L", "C"]));
      this.number -= divisions * 10;
    }
    let divisions = parseInt(this.number / 1);
    this.numeral.push(this.getNumeral(divisions, ["I", "V", "X"]));
    this.number -= divisions * 1;
  };

  getNumeral = (divisions, nEls) => {
    let range = this.numeralRange(nEls[0], nEls[1], nEls[2]);
    return range[divisions];
  };

  numeralRange = (min, mid, max) => {
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
}

const solution = (number) => {
  let numeralObj = new Numeral(number);
  // console.log(numeralObj);
  // console.log(numeralObj.numeral);
  // console.log(numeralObj.getNumeralVal());
  return numeralObj.getNumeralVal();
};
// solution(44);

module.exports = solution;

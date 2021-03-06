class Numeral {
  constructor(number) {
    this.number = number;
    this.numerals = [];
    this.buildNumeral();
  }

  getValue() {
    return this.numerals.join("");
  }

  buildNumeral() {
    this.calculateNumeral(1000, ["M", "MMM", ""]);
    this.calculateNumeral(100, ["C", "D", "M"]);
    this.calculateNumeral(10, ["X", "L", "C"]);
    this.calculateNumeral(1, ["I", "V", "X"]);
  }

  calculateNumeral(divisor, elements) {
    if (this.number >= divisor) {
      let divisions = parseInt(this.number / divisor);
      this.numerals.push(this.getSubNumeral(divisions, elements));
      this.number -= divisions * divisor;
    }
  }

  getSubNumeral(divisions, nEls) {
    let range = this.numeralRange(nEls[0], nEls[1], nEls[2]);
    return range[divisions];
  }

  numeralRange(min, mid, max) {
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
  }
}

function solution(number) {
  return new Numeral(number).getValue();
}

module.exports = solution;

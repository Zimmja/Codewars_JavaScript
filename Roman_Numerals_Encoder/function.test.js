const solution = require("./function");

const checkSymbol = (num, sym) => {
  expect(solution(num)).toBe(sym);
};

const numerals10 = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];
const numerals19 = numerals10.concat([
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
]);
const numerals39 = numerals19.concat([
  "XX",
  "XXI",
  "XXII",
  "XXIII",
  "XXIV",
  "XXV",
  "XXVI",
  "XXVII",
  "XXVIII",
  "XXIX",
  "XXX",
  "XXXI",
  "XXXII",
  "XXXIII",
  "XXXIV",
  "XXXV",
  "XXXVI",
  "XXXVII",
  "XXXVIII",
  "XXXIX",
]);

const numberRange = (max) => {
  accum = [];
  for (i = 1; i <= max; i++) {
    accum.push(i);
  }
  return accum;
};

test("It returns the symbol for 1", () => {
  checkSymbol(1, "I");
});

test("It returns symbols up to 10", () => {
  let nums = numberRange(10);
  let syms = numerals10;
  nums.forEach((x, i) => checkSymbol(x, syms[i]));
});

test("It returns symbols up to 19", () => {
  let nums = numberRange(19);
  let syms = numerals19;
  nums.forEach((x, i) => checkSymbol(x, syms[i]));
});

test("It returns the symbol for 20", () => {
  checkSymbol(20, "XX");
});

test("It returns symbols up to 39", () => {
  let nums = numberRange(39);
  let syms = numerals39;
  nums.forEach((x, i) => checkSymbol(x, syms[i]));
});

test("It returns the symbols below 100", () => {
  checkSymbol(47, "XLVII");
  checkSymbol(55, "LV");
  checkSymbol(63, "LXIII");
  checkSymbol(72, "LXXII");
  checkSymbol(81, "LXXXI");
  checkSymbol(98, "XCVIII");
});

test("It returns the symbol for numbers under 1000", () => {
  checkSymbol(476, "CDLXXVI");
});

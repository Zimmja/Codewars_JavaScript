const solution = require("./function");

const checkSymbol = (num, sym) => {
  expect(solution(num)).toBe(sym);
};

const numerals1_to_10 = [
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
const numerals10_to_19 = [
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
];

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
  let syms = numerals1_to_10;
  nums.forEach((x, i) => checkSymbol(x, syms[i]));
});

test("It returns symbols up to 19", () => {
  let nums = numberRange(19);
  let syms = numerals1_to_10.concat(numerals10_to_19);
  nums.forEach((x, i) => checkSymbol(x, syms[i]));
});

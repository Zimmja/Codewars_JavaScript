const solution = require("./function");

const checkSymbol = (num, sym) => {
  expect(solution(num)).toBe(sym);
};

test("It returns the symbol for 1", () => {
  checkSymbol(1, "I");
});

test("It returns symbols up to 10", () => {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let syms = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  nums.forEach((x, i) => checkSymbol(x, syms[i]));
});

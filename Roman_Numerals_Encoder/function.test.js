const solution = require("./function");

test("It returns the symbol for 1", () => {
  expect(solution(1)).toBe("I");
});

test("It returns the symbols for 2 - 5", () => {
  expect(solution(2)).toBe("II");
  expect(solution(3)).toBe("III");
  expect(solution(4)).toBe("IV");
  expect(solution(5)).toBe("V");
});

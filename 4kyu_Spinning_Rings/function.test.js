const solution = require("./function");

test("Return 1 for [1, 1]", () => {
  expect(solution(1, 1)).toEqual(1);
});

test("Return 3 for [2, 2]", () => {
  expect(solution(2, 2)).toEqual(3);
});

test("Return 3 for [5, 5]", () => {
  expect(solution(5, 5)).toEqual(3);
});

test("Return 13 for [2, 10]", () => {
  expect(solution(2, 10)).toEqual(13);
});

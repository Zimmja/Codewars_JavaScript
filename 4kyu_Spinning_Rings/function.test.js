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

test("Works for larger values", () => {
  expect(solution(2 ** 24, 3 ** 15)).toEqual(23951671);
});

test("Works for really big values", () => {
  expect(solution(131983531646778, 90915287537703)).toEqual(177441175415631);
});

// test("Works for really big values paired with smaller values", () => {
//   expect(solution(5362, 253199320071448)).toEqual("?");
// });

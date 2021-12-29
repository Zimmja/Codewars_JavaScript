const solution = require("./function");

test("Return 1 for [1, 1]", () => {
  expect(solution(1, 1)).toEqual(1);
});

test("Simple inputs with identical inners and outers [2, 2]", () => {
  expect(solution(2, 2)).toEqual(3);
  expect(solution(5, 5)).toEqual(3);
});

test("Simple inputs with higher outer value [2, 10]", () => {
  expect(solution(2, 10)).toEqual(13);
});

test("Simple inputs with higher innrt value [10, 2]", () => {
  expect(solution(10, 2)).toEqual(10);
});

test("Larger values of similar size", () => {
  expect(solution(16777216, 14348907)).toEqual(23951671);
});

test("Very large values of similar size", () => {
  expect(solution(131983531646778, 90915287537703)).toEqual(177441175415631);
});

test("Smaller inner, small difference", () => {
  expect(solution(845, 5028)).toEqual(423);
});

test("Smaller inner, huge difference", () => {
  expect(solution(5362, 253199320071448)).toEqual(253199320072568);
});

test("Smaller outer, small difference", () => {
  expect(solution(5028, 845)).toEqual(9259);
});

test("Smaller outer, huge difference", () => {
  expect(solution(84728478560236, 6635)).toEqual(169456957115699);
});

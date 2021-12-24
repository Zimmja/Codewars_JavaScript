const sumOfSquares = require("./function");

test("Returns 1 for numbers that are squares", () => {
  expect(sumOfSquares(1)).toEqual(1);
  expect(sumOfSquares(4)).toEqual(1);
  expect(sumOfSquares(9)).toEqual(1);
});

test("Returns 2 for numbers that are squares + 1", () => {
  expect(sumOfSquares(5)).toEqual(2);
  expect(sumOfSquares(10)).toEqual(2);
});

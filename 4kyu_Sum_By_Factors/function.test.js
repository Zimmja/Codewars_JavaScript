const sumOfDivided = require("./function");

test("A single value with one prime factor: 2", () => {
  expect(sumOfDivided([4])).toEqual([[2, 4]]);
});

test("A single value with one prime factor: 3", () => {
  expect(sumOfDivided([9])).toEqual([[3, 9]]);
});

test("A single value with two prime factors: 2 and 3", () => {
  expect(sumOfDivided([12])).toEqual([
    [2, 12],
    [3, 12],
  ]);
});

test("A single value with three prime factors: 2, 3 and 5", () => {
  expect(sumOfDivided([60])).toEqual([
    [2, 60],
    [3, 60],
    [5, 60],
  ]);
});

test("Two identical values with two prime factors: 2 and 3", () => {
  expect(sumOfDivided([12, 12])).toEqual([
    [2, 24],
    [3, 24],
  ]);
});

test("Two different values", () => {
  expect(sumOfDivided([12, 15])).toEqual([
    [2, 12],
    [3, 27],
    [5, 15],
  ]);
});

test("Three different values", () => {
  expect(sumOfDivided([12, 15, 21])).toEqual([
    [2, 12],
    [3, 48],
    [5, 15],
    [7, 21],
  ]);
});

test("Five different values", () => {
  expect(sumOfDivided([12, 15, 21, 35, 87])).toEqual([
    [2, 12],
    [3, 135],
    [5, 50],
    [7, 56],
    [29, 87],
  ]);
});

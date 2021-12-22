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

test("Works for prime numbers", () => {
  expect(sumOfDivided([2])).toEqual([[2, 2]]);
  expect(sumOfDivided([2, 3])).toEqual([
    [2, 2],
    [3, 3],
  ]);
});

test("Works for 1", () => {
  expect(sumOfDivided([1])).toEqual([]);
});

test("Works for negative numbers", () => {
  expect(sumOfDivided([15, 30, -45])).toEqual([
    [2, 30],
    [3, 0],
    [5, 0],
  ]);
});

test("Works for a large negative number", () => {
  expect(sumOfDivided([-4209])).toEqual([
    [3, -4209],
    [23, -4209],
    [61, -4209],
  ]);
});

// test("Works for only large negative numbers", () => {
//   expect(sumOfDivided([-29804, -4209, -28265, -72769, -31744])).toEqual([
//     [2, -61548],
//     [3, -4209],
//     [5, -28265],
//     [23, -4209],
//     [31, -31744],
//     [53, -72769],
//     [61, -4209],
//     [1373, -72769],
//     [5653, -28265],
//     [7451, -29804],
//   ]);
// });

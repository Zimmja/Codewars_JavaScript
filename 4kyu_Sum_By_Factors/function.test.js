const sumOfDivided = require("./function");

test("A single value with one prime factor: 2", () => {
  expect(sumOfDivided([4])).toEqual([[2, 4]]);
});

test("A single value with one prime factor: 3", () => {
  expect(sumOfDivided([9])).toEqual([[3, 9]]);
});

// test("A single value with two prime factors: 2 and 3", () => {
//   expect(sumOfDivided([12])).toEqual([
//     [2, 12],
//     [3, 12],
//   ]);
// });

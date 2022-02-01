const solvePuzzle = require("./function.js");

const puzzle01 = [4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
const puzzle02 = [-1, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1];
const puzzle03 = [-1, -1, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1];
const puzzle04 = [-1, 4, -1, -1, -1, -1, 4, -1, -1, 4, -1, -1, -1, -1, 4, -1];

test("If a 4 is found in the top row, the entire column is populated", () => {
  expect(solvePuzzle(puzzle01)).toEqual([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
  ]);
});

test("If a 4 is found in the bottom row, the entire column is populated in reverse order", () => {
  expect(solvePuzzle(puzzle02)).toEqual([
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
  ]);
});

test("If a 4 is found in a column, the entire row is populated", () => {
  expect(solvePuzzle(puzzle03)).toEqual([
    [4, 3, 2, 1],
    [4, 3, 2, 1],
    [4, 3, 2, 1],
    [4, 3, 2, 1],
  ]);
});

test("Clue correctly places a 4 in multiple columns", () => {
  expect(solvePuzzle(puzzle04)).toEqual([
    [0, 1, 4, 0],
    [1, 2, 3, 4],
    [4, 3, 2, 1],
    [0, 4, 1, 0],
  ]);
});

const puzzle05 = [-1, 1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1];
test("puzzle05 can fill out 1s", () => {
  expect(solvePuzzle(puzzle05)).toEqual([
    [0, 4, 0, 0],
    [0, 0, 0, 4],
    [4, 0, 0, 0],
    [0, 0, 4, 0],
  ]);
});

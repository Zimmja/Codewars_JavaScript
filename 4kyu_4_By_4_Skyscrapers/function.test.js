const solvePuzzle = require("./function.js");

const puzzle01 = [4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const puzzle02 = [1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1];
const puzzle03 = [1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1];
const puzzle04 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4];

test("puzzle01 arranges columns from 1 to 4", () => {
  expect(solvePuzzle(puzzle01)).toEqual([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
  ]);
});

test("puzzle02 arranges columns from 4 to 1", () => {
  expect(solvePuzzle(puzzle02)).toEqual([
    [4, 4, 4, 4],
    [3, 3, 3, 3],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
  ]);
});

test("puzzle03 arranges rows from 4 to 1", () => {
  expect(solvePuzzle(puzzle03)).toEqual([
    [4, 3, 2, 1],
    [4, 3, 2, 1],
    [4, 3, 2, 1],
    [4, 3, 2, 1],
  ]);
});

test("puzzle04 arranges rows from 1 to 4", () => {
  expect(solvePuzzle(puzzle04)).toEqual([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ]);
});

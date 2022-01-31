const solvePuzzle = require("./function.js");

const puzzle01 = [4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

test("returns true", () => {
  expect(solvePuzzle(puzzle01)).toEqual([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
  ]);
});

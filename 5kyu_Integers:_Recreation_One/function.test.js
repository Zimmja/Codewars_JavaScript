const listSquared = require("./function");

test("Returns [[1, 1]] for 1 - 10", () => {
  expect(listSquared(1, 10)).toEqual([[1, 1]]);
});

test("Returns [[1, 1]. [42, 2500]] for 1 - 50", () => {
  expect(listSquared(1, 50)).toEqual([
    [1, 1],
    [42, 2500],
  ]);
});

const humanReadable = require("./function");

test("it returns true", () => {
  expect(humanReadable(0)).toEqual(true);
});

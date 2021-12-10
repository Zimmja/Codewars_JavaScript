const humanReadable = require("./function");

test("Returns 00:00:00 for 0", () => {
  expect(humanReadable(0)).toEqual("00:00:00");
});

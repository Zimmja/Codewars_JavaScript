const humanReadable = require("./function");

test("Returns 00:00:00 for 0", () => {
  expect(humanReadable(0)).toEqual("00:00:00");
});

test("Returns 00:00:01 for 1", () => {
  expect(humanReadable(1)).toEqual("00:00:01");
});

test("Returns 00:00:10 for 10", () => {
  expect(humanReadable(10)).toEqual("00:00:10");
});

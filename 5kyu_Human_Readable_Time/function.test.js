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

test("Returns 00:01:00 for 60", () => {
  expect(humanReadable(60)).toEqual("00:01:00");
});

test("Returns 00:01:30 for 90", () => {
  expect(humanReadable(90)).toEqual("00:01:30");
});

test("Returns 00:59:59 for 3599", () => {
  expect(humanReadable(3599)).toEqual("00:59:59");
});

test("Returns 01:00:00 for 3600", () => {
  expect(humanReadable(3600)).toEqual("01:00:00");
});

test("Returns 99:59:59 for 359999", () => {
  expect(humanReadable(359999)).toEqual("99:59:59");
});

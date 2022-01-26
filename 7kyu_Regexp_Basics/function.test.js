const eightBit = require("./function.js");

test("returns true for 0", () => {
  expect(eightBit("0")).toEqual(true);
});

test("returns false for 00", () => {
  expect(eightBit("00")).toEqual(false);
});

test("returns true for 10", () => {
  expect(eightBit("10")).toEqual(true);
});

test("returns true for 100", () => {
  expect(eightBit("100")).toEqual(true);
});

test("returns true for 1", () => {
  expect(eightBit("1")).toEqual(true);
});

test("returns true for 255", () => {
  expect(eightBit("255")).toEqual(true);
});

test("returns false for 256", () => {
  expect(eightBit("256")).toEqual(false);
});

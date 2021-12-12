const isValidIP = require("./function");

test("Returns true when IP = 0.0.0.0", () => {
  expect(isValidIP("0.0.0.0")).toBe(true);
});

test("Returns false if not enough numbers are given", () => {
  expect(isValidIP("0.0.0")).toBe(false);
});

test("Returns false if too many numbers are given", () => {
  expect(isValidIP("0.0.0.0.0")).toBe(false);
});

test("Returns false when one or more parts are > 255", () => {
  expect(isValidIP("0.0.0.256")).toBe(false);
});

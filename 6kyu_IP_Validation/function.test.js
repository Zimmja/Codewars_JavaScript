const isValidIP = require("./function");

test("It returns true when IP = 0.0.0.0", () => {
  expect(isValidIP("0.0.0.0")).toBe(true);
});

test("It returns false if not enough numbers are given", () => {
  expect(isValidIP("0.0.0")).toBe(false);
});

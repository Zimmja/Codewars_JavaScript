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

test("Returns false when one or more parts < 0", () => {
  expect(isValidIP("0.0.0.-1")).toBe(false);
  expect(isValidIP("0.-17.0.0")).toBe(false);
});

test("Returns false when one or more parts is not a number", () => {
  expect(isValidIP("0.0.0.abc")).toBe(false);
  expect(isValidIP("1e0.1e1.1e2.2e2")).toBe(false);
});

test("Returns correct value for random tests", () => {
  expect(isValidIP("123.456.789.0")).toBe(false);
  expect(isValidIP("12.34.56")).toBe(false);
  expect(isValidIP("137.255.156.100")).toBe(true);
  expect(isValidIP("\n1.2.3.4")).toBe(false);
  expect(isValidIP("1.2.3.4\n")).toBe(false);
});

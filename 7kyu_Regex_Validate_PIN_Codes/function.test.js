const validatePIN = require("./function.js");

test("returns true for 4 digits", () => {
  expect(validatePIN("1234")).toEqual(true);
});

test("returns false for 5 digits", () => {
  expect(validatePIN("12345")).toEqual(false);
});

test("returns true for 3 digits and a character", () => {
  expect(validatePIN("a234")).toEqual(false);
});

test("returns true for 6 digits", () => {
  expect(validatePIN("123456")).toEqual(true);
});

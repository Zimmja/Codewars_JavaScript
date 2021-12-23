const alphanumeric = require("./function");

test("Returns true for simple words", () => {
  expect(alphanumeric("hello")).toEqual(true);
});

test("Returns false for a single whitespace", () => {
  expect(alphanumeric(" ")).toEqual(false);
});

const alphanumeric = require("./function");

test("Return false", () => {
  expect(alphanumeric("")).toEqual(false);
});

const isValidIP = require("./function");

test("It returns false", () => {
  expect(isValidIP()).toEqual(false);
});

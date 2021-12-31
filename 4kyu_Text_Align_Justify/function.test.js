const justify = require("./function");

test("When the string is shorter than len, return string", () => {
  expect(justify("Hello", 10)).toEqual("Hello");
});

const justify = require("./function");

test("When the string is one word and shorter than len, return string", () => {
  expect(justify("Hello", 10)).toEqual("Hello");
});

test("When the string is two words and shorter than len, justify to length", () => {
  expect(justify("Hello world!", 15)).toEqual("Hello    world!");
});

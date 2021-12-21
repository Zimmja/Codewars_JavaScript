const generateHashtag = require("./function");

test("Returns #Hello for Hello", () => {
  expect(generateHashtag("Hello")).toEqual("#Hello");
});

test("Returns #Hello for hello", () => {
  expect(generateHashtag("hello")).toEqual("#Hello");
});

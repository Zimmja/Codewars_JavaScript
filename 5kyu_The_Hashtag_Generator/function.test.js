const generateHashtag = require("./function");

test("Returns #Hello for Hello", () => {
  expect(generateHashtag("Hello")).toEqual("#Hello");
});

const generateHashtag = require("./function");

test("Returns false", () => {
  expect(generateHashtag("Hello World!")).toEqual(false);
});

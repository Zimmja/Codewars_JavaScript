const spinWords = require("./function");

test("Doesn't flip smaller words", () => {
  expect(spinWords("test")).toBe("test");
});

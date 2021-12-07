const spinWords = require("./function");

test("Doesn't flip smaller words", () => {
  expect(spinWords("test")).toBe("test");
});

test("Flips longer words", () => {
  expect(spinWords("longer")).toBe("regnol");
});

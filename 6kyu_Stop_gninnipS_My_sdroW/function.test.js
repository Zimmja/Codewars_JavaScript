const spinWords = require("./function");

test("Doesn't flip smaller words", () => {
  expect(spinWords("test")).toBe("test");
});

test("Flips longer words", () => {
  expect(spinWords("longer")).toBe("regnol");
});

test("Works with multiple smaller words", () => {
  expect(spinWords("test test")).toBe("test test");
});

test("Works with multiple longer words", () => {
  expect(spinWords("longer longer")).toBe("regnol regnol");
});

test("Works with sentences", () => {
  expect(spinWords("Stop Spinning My Words")).toBe("Stop gninnipS My sdroW");
});

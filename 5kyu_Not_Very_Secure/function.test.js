const alphanumeric = require("./function");

test("Returns true for simple words", () => {
  expect(alphanumeric("hello")).toEqual(true);
});

test("Returns false for a single whitespace", () => {
  expect(alphanumeric(" ")).toEqual(false);
});

test("Returns false for a combo of character and whitespace", () => {
  expect(alphanumeric("a ")).toEqual(false);
});

test("Returns false for a single non-alphanumeric characters", () => {
  expect(alphanumeric("!")).toEqual(false);
  expect(alphanumeric("?")).toEqual(false);
  expect(alphanumeric(")")).toEqual(false);
  expect(alphanumeric("(")).toEqual(false);
  expect(alphanumeric(".")).toEqual(false);
});

test("Returns true for complex passwords", () => {
  expect(alphanumeric("hell0Wor1d")).toEqual(true);
  expect(alphanumeric("0dvjN45eprSD54unIIgv9")).toEqual(true);
  expect(alphanumeric("gr8m8wotASt8")).toEqual(true);
});

test("Returns false for blank string", () => {
  expect(alphanumeric("")).toEqual(false);
});

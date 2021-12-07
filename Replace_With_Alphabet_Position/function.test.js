const alphabetPosition = require("./function");

test("Returns 1 if text === 'a", () => {
  expect(alphabetPosition("a")).toBe("1");
});

test("Returns 2 if text === 'b", () => {
  expect(alphabetPosition("b")).toBe("2");
});

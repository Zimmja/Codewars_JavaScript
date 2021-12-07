const alphabetPosition = require("./function");

test("Returns 1 if text === 'a'", () => {
  expect(alphabetPosition("a")).toBe("1");
});

test("Returns 2 if text === 'b'", () => {
  expect(alphabetPosition("b")).toBe("2");
});

test("Returns 26 if text === 'z'", () => {
  expect(alphabetPosition("z")).toBe("26");
});

test("Returns '1 2' if text === 'a b'", () => {
  expect(alphabetPosition("a b")).toBe("1 2");
});

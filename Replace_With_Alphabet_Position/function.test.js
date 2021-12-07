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

test("Returns '1 2 3' if text === 'a b c ?'", () => {
  expect(alphabetPosition("a b c ?")).toBe("1 2 3");
});

test("Works with upper case characters", () => {
  expect(alphabetPosition("A")).toBe("1");
});

// test("Returns ful sentences", () => {
//   expect(alphabetPosition("The sunset sets at twelve o' clock.")).toBe(
//     "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//   );
// });

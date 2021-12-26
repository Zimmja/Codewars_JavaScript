const solution = require("./function");

test("Removes everything after a single passed marker", () => {
  expect(solution("Hello # world", ["#"])).toEqual("Hello");
});

test("Removes everything after a multiple markers", () => {
  expect(solution("Hello # world", ["!", "#"])).toEqual("Hello");
});

test("Removes everything after a many markers", () => {
  expect(solution("Hello # world", ["!", "#", "?", "*", "@"])).toEqual("Hello");
});

test("Checks for multiple lines", () => {
  expect(solution("Hello # world \nHow are you", ["#"])).toEqual(
    "Hello\nHow are you"
  );
});

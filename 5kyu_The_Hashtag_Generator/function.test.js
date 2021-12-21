const generateHashtag = require("./function");

test("Returns #Hello for Hello", () => {
  expect(generateHashtag("Hello")).toEqual("#Hello");
});

test("Returns #Hello for hello", () => {
  expect(generateHashtag("hello")).toEqual("#Hello");
});

test("Returns #HelloWorld for hello world", () => {
  expect(generateHashtag("hello world")).toEqual("#HelloWorld");
});

test("Returns #HelloWorldIsRunning for hello world is running", () => {
  expect(generateHashtag("hello world is running")).toEqual(
    "#HelloWorldIsRunning"
  );
});

test("Returns #HelloWorld for hello    world", () => {
  expect(generateHashtag("hello    world")).toEqual("#HelloWorld");
});

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

test("Returns false when the result is over 140 characters", () => {
  let longWord = Array(150).fill("A").join("");
  expect(generateHashtag(longWord)).toEqual(false);
});

test("Returns false when the string is empty", () => {
  expect(generateHashtag("")).toEqual(false);
});

test("Returns false when the string only includes spaces", () => {
  expect(generateHashtag(" ")).toEqual(false);
});

const justify = require("./function");

test("When the string is one word and shorter than len, return string", () => {
  expect(justify("Hello", 10)).toEqual("Hello");
});

test("When the string is two words and shorter than len, justify to length", () => {
  expect(justify("Hello world!", 15)).toEqual("Hello    world!");
});

test("String is three words, shorter than len, evenly spaced", () => {
  expect(justify("Hello there world", 21)).toEqual("Hello   there   world");
});

test("String is three words, shorter than len, unevenly spaced", () => {
  expect(justify("Hello there world", 22)).toEqual("Hello    there   world");
  expect(justify("How now red cow bow", 22)).toEqual("How  now  red  cow bow");
});

test("String has too many words to fit on one line", () => {
  expect(justify("How now red cow bow", 10)).toEqual(
    "How    now\nred    cow\nbow"
  );
});

const justify = require("./function");

test("When the string is one word and shorter than len, return string", () => {
  expect(justify("Hello", 10)).toEqual("Hello");
});

test("When the string is two words and shorter than len, justify to length", () => {
  expect(justify("Hello world! abcdefghijklmno", 15)).toEqual(
    "Hello    world!\nabcdefghijklmno"
  );
});

test("String is three words, shorter than len, evenly spaced", () => {
  expect(justify("Hello there world abcdefghijklmno", 21)).toEqual(
    "Hello   there   world\nabcdefghijklmno"
  );
});

test("String is three words, shorter than len, unevenly spaced", () => {
  expect(justify("Hello there world abcdefghijklmno", 22)).toEqual(
    "Hello    there   world\nabcdefghijklmno"
  );
  expect(justify("How now red cow bow abcdefghijklmno", 22)).toEqual(
    "How  now  red  cow bow\nabcdefghijklmno"
  );
});

test("String has too many words to fit on one line", () => {
  expect(justify("How now red cow bow", 10)).toEqual(
    "How    now\nred    cow\nbow"
  );
});

test("The last line doesn't need to be justified", () => {
  expect(justify("How now red cow", 10)).toEqual("How    now\nred cow");
});

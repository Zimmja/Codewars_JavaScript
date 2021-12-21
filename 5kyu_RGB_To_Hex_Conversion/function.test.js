const rgb = require("./function");

test("Black: returns 000000 for rgb(0,0,0)", () => {
  expect(rgb(0, 0, 0)).toBe("000000");
});

test("White: returns FFFFFF for rgb(255,255,255)", () => {
  expect(rgb(255, 255, 255)).toBe("FFFFFF");
});

test("Red: returns FF0000 for rgb(255,0,0)", () => {
  expect(rgb(255, 0, 0)).toBe("FF0000");
});

test("Red: returns FF0000 for rgb(300,0,0)", () => {
  expect(rgb(300, 0, 0)).toBe("FF0000");
});

test("Black: returns 000000 for rgb(-10,0,0)", () => {
  expect(rgb(-10, 0, 0)).toBe("000000");
});

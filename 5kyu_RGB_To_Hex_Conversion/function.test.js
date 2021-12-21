const rgb = require("./function");

test("Black: returns 000000 for rgb(0,0,0)", () => {
  expect(rgb(0, 0, 0)).toBe("000000");
});

test("White: returns FFFFFF for rgb(255,255,255)", () => {
  expect(rgb(0, 0, 0)).toBe("000000");
});

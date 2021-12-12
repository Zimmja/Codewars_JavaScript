const dirReduc = require("./function");

test("Return the inpurt array if it contains only one element", () => {
  expect(dirReduc(["NORTH"])).toEqual(["NORTH"]);
  expect(dirReduc(["SOUTH"])).toEqual(["SOUTH"]);
  expect(dirReduc(["EAST"])).toEqual(["EAST"]);
  expect(dirReduc(["WEST"])).toEqual(["WEST"]);
});

test("Return the inpurt array if it contains no cancelling elements", () => {
  expect(dirReduc(["NORTH", "NORTH"])).toEqual(["NORTH", "NORTH"]);
  expect(dirReduc(["NORTH", "EAST"])).toEqual(["NORTH", "EAST"]);
  expect(dirReduc(["SOUTH", "WEST"])).toEqual(["SOUTH", "WEST"]);
});

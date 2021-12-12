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

test("Return an empty array if input array contains two cancelling elements", () => {
  expect(dirReduc(["SOUTH", "NORTH"])).toEqual([]);
  expect(dirReduc(["NORTH", "SOUTH"])).toEqual([]);
  expect(dirReduc(["EAST", "WEST"])).toEqual([]);
  expect(dirReduc(["WEST", "EAST"])).toEqual([]);
});

// test("Cancels out the correct values and leaves the rest", () => {
//   expect(
//     dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
//   ).toEqual(["WEST"]);
// });

// test("Only works if reducable", () => {
//   expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual([
//     "NORTH",
//     "WEST",
//     "SOUTH",
//     "EAST",
//   ]);
// });

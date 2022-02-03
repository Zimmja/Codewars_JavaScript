const regexTicTacToeWinChecker = require("./function.js");

test("Returns true", () => {
  expect(regexTicTacToeWinChecker("hi")).toEqual(true);
});

const regexTicTacToeWinChecker = require("./function.js");

const emptyBoard = "---------";
test("Returns false for an empty board", () => {
  expect(regexTicTacToeWinChecker(emptyBoard)).toEqual(false);
});

const winX01 = "XXX------";
test("Returns true when the top row is full of Xs", () => {
  expect(regexTicTacToeWinChecker(winX01)).toEqual(true);
});

const winX02 = "---XXX---";
test("Returns true when the middle row is full of Xs", () => {
  expect(regexTicTacToeWinChecker(winX02)).toEqual(true);
});

const loose01 = "-XX------";
test("Returns false when the top row is almost (but not) full of Xs", () => {
  expect(regexTicTacToeWinChecker(loose01)).toEqual(false);
});

const loose02 = "-XXX-----";
test("Returns false when there are three Xs in a row in the string, but not the board", () => {
  expect(regexTicTacToeWinChecker(loose02)).toEqual(false);
});

const winO01 = "------OOO";
test("Returns true when the last row is full of Os", () => {
  expect(regexTicTacToeWinChecker(winO01)).toEqual(true);
});

const winO02 = "-O--O--O-";
test("Returns true when a column of Os is present", () => {
  expect(regexTicTacToeWinChecker(winO02)).toEqual(true);
});

const winX03 = "--X--X--X";
test("Returns true when a column of Xs is present", () => {
  expect(regexTicTacToeWinChecker(winX03)).toEqual(true);
});

const winX04 = "--X-X-X--";
test("Returns true when a diagonal of Xs is present", () => {
  expect(regexTicTacToeWinChecker(winX04)).toEqual(true);
});

const winX05 = "X---X---X";
test("Returns true when a diagonal of Xs is present the other way", () => {
  expect(regexTicTacToeWinChecker(winX05)).toEqual(true);
});

const winO03 = "--O-O-O--";
test("Returns true when a diagonal of Os is present", () => {
  expect(regexTicTacToeWinChecker(winO03)).toEqual(true);
});

const winO04 = "O---O---O";
test("Returns true when a diagonal of Os is present the other way", () => {
  expect(regexTicTacToeWinChecker(winO04)).toEqual(true);
});

const loose03 = "XX-XOO---";
test("Expect board to lose", () => {
  expect(regexTicTacToeWinChecker(loose03)).toEqual(false);
});

const loose04 = "---XOX-XO";
test("Expect board to lose", () => {
  expect(regexTicTacToeWinChecker(loose04)).toEqual(false);
});

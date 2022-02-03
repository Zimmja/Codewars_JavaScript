function regexTicTacToeWinChecker(board) {
  return /^((...)?){2}(XXX|OOO)((...)?){2}$|O..O..O|X..X..X|..(X.X.X|O.O.O)..|X...X...X|O...O...O/.test(
    board
  );
}

module.exports = regexTicTacToeWinChecker;

console.log(
  "/^((...)?){2}(XXX|OOO)((...)?){2}$|O..O..O|X..X..X|..(X.X.X|O.O.O)..|X...X...X|O...O...O/"
    .length
);

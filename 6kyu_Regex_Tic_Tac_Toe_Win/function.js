function regexTicTacToeWinChecker(board) {
  return /^((...)?)*(XXX|OOO)((...)?)*$|O..O..O|X..X..X|..(X.X.X|O.O.O)..|X...X...X|O...O...O/.test(
    board
  );
}

module.exports = regexTicTacToeWinChecker;

function regexTicTacToeWinChecker(board) {
  const row01 = /(XXX|OOO)....../.test(board);
  const row02 = /...(XXX|OOO).../.test(board);
  const row03 = /......(XXX|OOO)/.test(board);
  const colsO = /O..O..O/.test(board);
  const colsX = /X..X..X/.test(board);
  const diagX = /(..X.X.X..)|(X...X...X)/.test(board);
  const diagO = /(..O.O.O..)|(O...O...O)/.test(board);

  console.log(row01, row02, row03, colsO, colsX, diagX, diagO);

  return [row01, row02, row03, colsO, colsX, diagX, diagO].includes(true);
}

module.exports = regexTicTacToeWinChecker;

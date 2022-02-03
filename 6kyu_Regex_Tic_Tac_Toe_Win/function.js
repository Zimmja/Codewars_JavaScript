function regexTicTacToeWinChecker(board) {
  const row01 = /((X{3}|O{3})[-XO]{6})/.test(board);
  const row02 = /([-XO]{3}(X{3}|O{3})[-XO]{3})/.test(board);
  const row03 = /([-XO]{6}(X{3}|O{3}))/.test(board);
  const colsO = /(O[-XO]{2}O[-XO]{2}O)/.test(board);
  const colsX = /(X[-XO]{2}X[-XO]{2}X)/.test(board);
  const diagX = /([-XO]{2}X[-XO]X[-XO]X)|(X[-XO]{3}X[-XO]{3}X)/.test(board);
  const diagO = /([-XO]{2}O[-XO]O[-XO]O)|(O[-XO]{3}O[-XO]{3}O)/.test(board);

  // console.log(row01, row02, row03, colsO, colsX, diagX, diagO);

  const hasTrue = [row01, row02, row03, colsO, colsX, diagX, diagO].includes(
    true
  );

  return hasTrue;
}

module.exports = regexTicTacToeWinChecker;

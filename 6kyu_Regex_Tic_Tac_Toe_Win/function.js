function regexTicTacToeWinChecker(board) {
  const row01 = /(XXX|OOO).{6}/;
  const row02 = /...(XXX|OOO).../;
  const row03 = /.{6}(XXX|OOO)/;
  const colsO = /O..O..O/;
  const colsX = /X..X..X/;
  const diag1 = /(..(X.X.X|O.O.O)..)/;
  const diag2 = /(X...X...X)|(O...O...O)/;

  const regexes = [row01, row02, row03, colsO, colsX, diag1, diag2];
  const regexTests = regexes.map((regex) => regex.test(board));

  // console.log(regexTests);
  console.log(
    "Regex length: " +
      regexes.map((reg) => reg.toString().length).reduce((a, b) => a + b)
  );

  return regexTests.includes(true);
}

module.exports = regexTicTacToeWinChecker;

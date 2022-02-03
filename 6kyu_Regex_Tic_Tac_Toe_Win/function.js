const regexTicTacToeWinChecker = (board) => {
  return /([XO]{3}[-XO]{6})|([-XO]{3}[XO]{3}[-XO]{3})|([-XO]{6}[XO]{3})|(O[-XO]{2}O[-XO]{2}O)|(X[-XO]{2}X[-XO]{2}X)/.test(
    board
  );
};

module.exports = regexTicTacToeWinChecker;

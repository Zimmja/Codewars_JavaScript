function solvePuzzle(clues) {
  const block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const blockCheckedFours = checkFours(clues, block);
  return blockCheckedFours;
}

const checkFours = (clues, block) => {
  clues.forEach((clue, i) => {
    if (clue == 4 && i <= 3) block = fillColumn(block, i, [1, 2, 3, 4]);
    if (clue == 4 && i <= 7 && i >= 4)
      block = fillRow(block, i - 4, [4, 3, 2, 1]);
    if (clue == 4 && i <= 11 && i >= 8)
      block = fillColumn(block, i - 8, [4, 3, 2, 1]);
    if (clue == 4 && i >= 12) block = fillRow(block, i - 12, [1, 2, 3, 4]);
  });
  return block;
};

const fillColumn = (block, colIndx, content) => {
  return block.map((row, i) => {
    row[colIndx] = content[i];
    return row;
  });
};

const fillRow = (block, rowIndx, content) => {
  block[rowIndx] = content;
  return block;
};

module.exports = solvePuzzle;

const puzzle01 = [1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1];
console.log(solvePuzzle(puzzle01));

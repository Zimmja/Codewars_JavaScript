function solvePuzzle(clues) {
  let block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  let blockEdited = true;
  while (blockEdited === true) {
    const copyBlock = block.slice();
    const newBlock = checkAgainstRules(clues, copyBlock);
    if (sumArr(newBlock) === sumArr(copyBlock)) {
      blockEdited = false;
      block = newBlock;
    }
  }
  return block;
}

const sumArr = (arr) => arr.reduce((a, b) => a + b);

const checkAgainstRules = (clues, block) => {
  let blockClone = block.slice();
  blockClone = checkFours(clues, blockClone);
  // blockClone = checkOnes(clues, blockClone);
  return blockClone;
};

// const checkOnes = (clues, block)

const checkFours = (clues, block) => {
  clues.forEach((clue, i) => {
    if (clue == 4) {
      if (i >= 12) {
        block = setRowOrCol(block, 3 - (i - 12), [1, 2, 3, 4]);
      } else if (i >= 8) {
        block = setRowOrCol(block, 3 - (i - 8), [4, 3, 2, 1], false);
      } else if (i >= 4) {
        block = setRowOrCol(block, i - 4, [4, 3, 2, 1]);
      } else {
        block = setRowOrCol(block, i, [1, 2, 3, 4], false);
      }
    }
  });
  return block;
};

const setSquare = (block, rowIndx, colIndx, setVal) => {
  if (block[rowIndx][colIndx] != 0) return block;
  block[rowIndx][colIndx] = setVal;
  return block;
};

const setRowOrCol = (block, index, setVals, row = true) => {
  const vals = row ? block[index] : getColVals(block, index);
  if (vals === setVals) return block;
  setVals.forEach((setVal, i) => {
    setSquare(block, row ? index : i, row ? i : index, setVal);
  });
  return block;
};

const getColVals = (block, colIndx) => [
  block[0][colIndx],
  block[1][colIndx],
  block[2][colIndx],
  block[3][colIndx],
];

module.exports = solvePuzzle;

const puzzle01 = [0, 4, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0];
console.log(solvePuzzle(puzzle01));

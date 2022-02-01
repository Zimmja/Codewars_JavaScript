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
  blockClone = checkOnes(clues, blockClone);
  return blockClone;
};

const checkOnes = (clues, block) => {
  clues.forEach((clue, i) => {
    if (clue === 1) {
      if (i >= 12) block = setSquare(block, indxD(i), 0, 4);
      if (i >= 8 && i < 12) block = setSquare(block, 3, indxC(i), 4);
      if (i >= 4 && i < 8) block = setSquare(block, indxB(i), 3, 4);
      if (i < 4) block = setSquare(block, 0, i, 4);
    }
  });
  return block;
};

const checkFours = (clues, block) => {
  clues.forEach((clue, i) => {
    if (clue === 4) {
      if (i >= 12) block = setRC(block, indxD(i), [1, 2, 3, 4], true);
      if (i >= 8 && i < 12) block = setRC(block, indxC(i), [4, 3, 2, 1]);
      if (i >= 4 && i < 8) block = setRC(block, indxB(i), [4, 3, 2, 1], true);
      if (i < 4) block = setRC(block, i, [1, 2, 3, 4]);
    }
  });
  return block;
};

const indxB = (i) => i - 4;
const indxC = (i) => 3 - (i - 8);
const indxD = (i) => 3 - (i - 12);

const setRC = (block, index, setVals, isRow = false) => {
  const vals = isRow ? block[index] : getColVals(block, index);
  if (vals === setVals) return block;
  return setLineOfSquares(block, index, setVals, isRow);
};

const setLineOfSquares = (block, index, setVals, isRow) => {
  setVals.forEach((setVal, i) => {
    setSquare(block, isRow ? index : i, isRow ? i : index, setVal);
  });
  return block;
};

const setSquare = (block, rowIndx, colIndx, setVal) => {
  if (block[rowIndx][colIndx] != 0) return block;
  block[rowIndx][colIndx] = setVal;
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

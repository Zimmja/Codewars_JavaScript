function solvePuzzle(clues) {
  let block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  let blockEdited = true;
  while (blockEdited === true) {
    const newBlock = checkAgainstRules(clues, block);
    if (sumArr(newBlock) === sumArr(block)) {
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
      if (sideD(i)) block = setSquare(block, indxD(i), 0, 4);
      if (sideC(i)) block = setSquare(block, 3, indxC(i), 4);
      if (sideB(i)) block = setSquare(block, indxB(i), 3, 4);
      if (sideA(i)) block = setSquare(block, 0, i, 4);
    }
  });
  return block;
};

const checkFours = (clues, block) => {
  clues.forEach((clue, i) => {
    if (clue === 4) {
      if (sideD(i)) block = setRC(block, indxD(i), [1, 2, 3, 4], true);
      if (sideC(i)) block = setRC(block, indxC(i), [4, 3, 2, 1]);
      if (sideB(i)) block = setRC(block, indxB(i), [4, 3, 2, 1], true);
      if (sideA(i)) block = setRC(block, i, [1, 2, 3, 4]);
    }
  });
  return block;
};

const sideA = (i) => i < 4;
const sideB = (i) => i >= 4 && i < 8;
const sideC = (i) => i >= 8 && i < 12;
const sideD = (i) => i >= 12;

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

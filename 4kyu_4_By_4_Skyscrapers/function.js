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

const setSquare = (block, rowIndx, colIndx, setVal) => {
  let blockClone = block.slice();
  if (blockClone[rowIndx][colIndx] != 0) return block;
  blockClone[rowIndx][colIndx] = setVal;
  return blockClone;
};

const setColumn = (block, colIndx, setVals) => {
  let blockClone = block.slice();
  const colVals = [
    blockClone[0][colIndx],
    blockClone[1][colIndx],
    blockClone[2][colIndx],
    blockClone[3][colIndx],
  ];
  if (colVals === setVals) return block;
  setVals.forEach((setVal, i) => {
    setSquare(block, i, colIndx, setVal);
  });
  return blockClone;
};

const setRow = (block, rowIndx, setVals) => {
  let blockClone = block.slice();
  const rowVals = blockClone[rowIndx];
  if (rowVals === setVals) return block;
  setVals.forEach((setVal, i) => {
    setSquare(block, rowIndx, i, setVal);
  });
  return blockClone;
};

const checkAgainstRules = (clues, block) => {
  return checkFours(clues, block);
};

const checkFours = (clues, block) => {
  let newBlock = block.slice();
  clues.forEach((clue, i) => {
    if (clue == 4) {
      if (i >= 12) {
        console.log("Updating over 12");
        newBlock = setRow(newBlock, 3 - (i - 12), [1, 2, 3, 4]);
      } else if (i >= 8) {
        console.log("Updating over 8");
        newBlock = setColumn(newBlock, 3 - (i - 8), [4, 3, 2, 1]);
      } else if (i >= 4) {
        console.log("Updating over 4");
        newBlock = setRow(newBlock, i - 4, [4, 3, 2, 1]);
      } else {
        console.log("Updating over 0");
        newBlock = setColumn(newBlock, i, [1, 2, 3, 4]);
      }
    }
  });
  return newBlock;
};

module.exports = solvePuzzle;

const puzzle01 = [0, 4, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0];
console.log(solvePuzzle(puzzle01));

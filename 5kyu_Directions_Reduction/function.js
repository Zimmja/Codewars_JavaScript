function dirReduc(arr) {
  let countN = arr.filter((x) => x === "NORTH").length;
  let countS = arr.filter((x) => x === "SOUTH").length;
  let countE = arr.filter((x) => x === "EAST").length;
  let countW = arr.filter((x) => x === "WEST").length;
  let resolveNS = resolveDir("NORTH", "SOUTH", countN, countS);
  let resolveEW = resolveDir("EAST", "WEST", countE, countW);
  return resolveNS.concat(resolveEW);
}

function resolveDir(up, down, countU, countD) {
  countR = countU - countD;
  if (countR === 0) {
    return [];
  } else if (countR > 0) {
    let upArr = new Array(countR);
    return upArr.fill(up);
  } else {
    let downArr = new Array(0 - countR);
    return downArr.fill(down);
  }
}

module.exports = dirReduc;

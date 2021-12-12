function dirReduc(arr) {
  if (arr.length === 1) return arr;
  if (arr[0] === "SOUTH" && arr[1] === "NORTH") {
    arr[0] = "";
    arr[1] = "";
  }
  filteredArr = arr.filter((x) => x != "");
  return filteredArr;
}

// function dirReduc(arr) {
//   // let countN = arr.filter((x) => x === "NORTH").length;
//   // let countS = arr.filter((x) => x === "SOUTH").length;
//   // let countE = arr.filter((x) => x === "EAST").length;
//   // let countW = arr.filter((x) => x === "WEST").length;
//   // let resolveNS = resolveDir("NORTH", "SOUTH", countN, countS);
//   // let resolveEW = resolveDir("EAST", "WEST", countE, countW);
//   // return resolveNS.concat(resolveEW);
//   // return arr.reduce((prev, curr) => {
//   //   return resolve(prev, curr);
//   // });
// }

// function resolveDir(up, down, countU, countD) {
//   countR = countU - countD;
//   if (countR === 0) {
//     return [];
//   } else if (countR > 0) {
//     let upArr = new Array(countR);
//     return upArr.fill(up);
//   } else {
//     let downArr = new Array(0 - countR);
//     return downArr.fill(down);
//   }
// }

module.exports = dirReduc;

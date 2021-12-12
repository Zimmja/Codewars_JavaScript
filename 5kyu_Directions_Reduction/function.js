function dirReduc(arr) {
  if (arr.length === 1) return arr;
  return resolveDir(arr);
}

function resolveDir(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (shouldCancel([arr[i], arr[i + 1]])) {
      arr[i] = "";
      arr[i + 1] = "";
    }
  }
  return arr.filter((x) => x != "");
}

function shouldCancel(values) {
  if (values.includes("NORTH") && values.includes("SOUTH")) return true;
  if (values.includes("EAST") && values.includes("WEST")) return true;
  return false;
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

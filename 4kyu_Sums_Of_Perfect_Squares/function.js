function sumOfSquares(n) {
  let maxRoot = biggestRoot(n);
  let sums = [n];
  for (let i = maxRoot; i >= 2; i -= 1) {
    let squaresSum = calcSquares(n, i, last(sums)).length;
    if (last(sums) > squaresSum) {
      sums.push(squaresSum);
      if (squaresSum === 2) i = 0;
    }
  }
  return last(sums);
}

function last(arr) {
  return arr[arr.length - 1];
}

function calcSquares(n, max, breakpoint) {
  let squares = [];
  while (n > 0) {
    let transArr = biggestRoot(n, max);
    squares.push(transArr);
    n -= squares.length >= breakpoint ? n : transArr * transArr;
  }
  return squares;
}

function biggestRoot(n, max = n) {
  let root = parseInt(Math.sqrt(n));
  return root < max ? root : max;
}

module.exports = sumOfSquares;

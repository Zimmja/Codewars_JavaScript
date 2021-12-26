function sumOfSquares(n) {
  let biggestSubSquare = biggestSquare(n)[0];
  let sums = [n];
  for (let i = biggestSubSquare; i >= 2; i -= 1) {
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
    let transArr = biggestSquare(n, max);
    squares.push(transArr[0]);
    n -= transArr[1];
    if (squares.length >= breakpoint) n = 0;
  }
  return squares;
}

function biggestSquare(n, max = n) {
  let biggestRoot = parseInt(Math.sqrt(n));
  let root = biggestRoot < max ? biggestRoot : max;
  return [root, root * root];
}

module.exports = sumOfSquares;

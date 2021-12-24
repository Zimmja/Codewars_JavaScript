function sumOfSquares(n) {
  let biggest = biggestSquare(n)[0];
  let sums = [n];
  for (let i = 2; i <= biggest; i++) {
    let squaresSum = calcSquares(n, i).length;
    if (last(sums) > squaresSum) {
      sums.push(squaresSum);
    }
    console.log(sums);
  }
  return last(sums);
}

function last(arr) {
  return arr[arr.length - 1];
}

function calcSquares(n, max) {
  let squares = [];
  while (n > 0) {
    let transArr = biggestSquare(n, max);
    squares.push(transArr[0]);
    n -= transArr[1];
  }
  return squares;
}

function biggestSquare(n, max = n) {
  let biggestRoot = parseInt(Math.sqrt(n));
  let root = biggestRoot < max ? biggestRoot : max;
  return [root, root * root];
}

module.exports = sumOfSquares;

console.log(sumOfSquares(4));

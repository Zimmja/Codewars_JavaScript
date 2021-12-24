function sumOfSquares(n) {
  return isSquare(n) ? 1 : 2;
}

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

module.exports = sumOfSquares;

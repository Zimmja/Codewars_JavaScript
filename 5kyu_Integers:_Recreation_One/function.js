function listSquared(m, n) {
  let squared = [];
  for (let i = m; i < n; i++) {
    let iDivisors = getDivisors(i);
    if (sumHasRoot(iDivisors)) squared.push([i, sumSquares(iDivisors)]);
  }
  return squared;
}

function sumHasRoot(arr) {
  let squareRoot = Math.sqrt(sumSquares(arr));
  return squareRoot === parseInt(squareRoot);
}

function getDivisors(num) {
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
}

function sumSquares(arr) {
  let squares = arr.map((x) => x * x);
  return squares.reduce((x, y) => x + y);
}

module.exports = listSquared;

console.log(listSquared(1, 50));

function sumOfSquares(n) {
  let maxRoot = biggestRoot(n),
    rootCounts = [n];
  for (let i = maxRoot; i >= 2; i -= 1) {
    let rCount = last(rootCounts);
    let rootCount = getRootsArr(n, i, rCount).length;
    if (rCount > rootCount) rootCounts.push(rootCount);
  }
  return last(rootCounts);
}

function last(arr) {
  return arr[arr.length - 1];
}

function getRootsArr(n, max, breakpoint) {
  let roots = [];
  while (n > 0) {
    let root = biggestRoot(n, max);
    roots.push(root);
    n -= roots.length >= breakpoint ? n : root * root;
  }
  return roots;
}

function biggestRoot(n, max = n) {
  let root = parseInt(Math.sqrt(n));
  return root < max ? root : max;
}

module.exports = sumOfSquares;

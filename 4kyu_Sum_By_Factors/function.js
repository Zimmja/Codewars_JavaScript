function sumOfDivided(lst) {
  let allPrimeFactors = getAllPrimeFactors(lst);
  return allPrimeFactors.map((factor) => factorAndSum(factor, lst));
}

function getAllPrimeFactors(lst) {
  let primeFactors = [];
  lst.forEach((num) => primeFactors.push(getPrimeFactors(num)));
  return uniques(primeFactors.flat());
}

function getPrimeFactors(val) {
  let factors = getFactors(val);
  return factors.filter((number) => isPrime(number));
}

function getFactors(val) {
  let factors = [],
    max = halfInt(val);
  for (let i = 2; i <= max; i++) {
    if (val % i === 0) factors.push(i);
  }
  return factors.concat(val);
}

function factorAndSum(factor, lst) {
  let sumVals = [];
  lst.forEach((num) => {
    if (num % factor === 0) sumVals.push(num);
  });
  return [factor, sumArr(sumVals)];
}

function isPrime(val) {
  let max = halfInt(val);
  for (let i = 2; i <= max; i++) {
    if (val % i === 0) return false;
  }
  return true;
}

function uniques(arr) {
  return arr.filter((val, ind) => arr.indexOf(val) === ind);
}

function sumArr(arr) {
  return arr.reduce((pre, pos) => pre + pos);
}

function halfInt(val) {
  return parseInt(val / 2);
}

module.exports = sumOfDivided;

console.log(sumOfDivided([2]));

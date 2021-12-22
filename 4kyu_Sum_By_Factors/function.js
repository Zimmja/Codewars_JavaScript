function sumOfDivided(lst) {
  if (lst.length === 0) return [];
  let allPrimeFactors = getAllPrimeFactors(lst);
  return allPrimeFactors.map((factor) => factorAndSum(factor, lst));
}

function getAllPrimeFactors(lst) {
  let primeFactors = [];
  lst.forEach((num) => primeFactors.push(getPrimeFactors(num)));
  return extractAndSortUniques(primeFactors);
}

function extractAndSortUniques(arr) {
  let uniqueVals = uniques(arr);
  return uniqueVals.sort((a, b) => {
    return a - b;
  });
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
  return resolveFactors(factors, val);
}

function resolveFactors(factors, val) {
  if (val > 1) return factors.concat(val);
  if (val < -1) return factors.concat(0 - val);
  return factors;
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
  let flatArr = flatten(arr);
  return flatArr.filter((val, ind) => flatArr.indexOf(val) === ind);
}

function sumArr(arr) {
  return arr.reduce((pre, pos) => pre + pos);
}

function halfInt(val) {
  let halvedInt = parseInt(val / 2);
  return halvedInt > 0 ? halvedInt : 0 - halvedInt;
}

function flatten(list) {
  return list.reduce((pre, pos) => pre.concat(pos));
}

module.exports = sumOfDivided;

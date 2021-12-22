function sumOfDivided(lst) {
  return [[getFactors(lst[0])[0], lst[0]]];
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
  return factors;
}

function isPrime(val) {
  let max = halfInt(val);
  for (let i = 2; i <= max; i++) {
    if (val % i === 0) return false;
  }
  return true;
}

function halfInt(val) {
  return parseInt(val / 2);
}

module.exports = sumOfDivided;

console.log(getPrimeFactors(50001));

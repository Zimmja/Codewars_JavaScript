function sumOfDivided(lst) {
  return lst.map((num) => withFactors(num)).flat();
}

function withFactors(num) {
  let primes = getPrimeFactors(num);
  return primes.map((prime) => [prime, num]);
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

console.log(sumOfDivided([12]));

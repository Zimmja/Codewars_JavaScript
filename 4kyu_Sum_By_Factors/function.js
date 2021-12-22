function sumOfDivided(lst) {
  return [[getPrimeFactors(lst[0])[0], lst[0]]];
}

function getPrimeFactors(val) {
  let factors = [];
  let max = val;
  let divisor = 2;

  while (divisor >= 2 && divisor <= max / 2) {
    if (val % divisor === 0) {
      factors.push(divisor);
      val /= divisor;
    }
    divisor++;
  }

  return factors;
}

module.exports = sumOfDivided;

console.log(sumOfDivided([6]));

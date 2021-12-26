function spinningRings(innerMax, outerMax) {
  let innerCount = innerMax;
  let outerCount = 1;
  let count = 1;
  while (innerCount != outerCount && count != 1000000000) {
    // console.log(`Start spin, inner:${innerCount}, outer:${outerCount}`);
    outerCount = outerCount === outerMax ? 0 : outerCount + 1;
    innerCount = innerCount === 0 ? innerMax : innerCount - 1;
    count += 1;
  }
  return count;
}

function getRange(max) {
  let range = [];
  for (let i = 0; i <= max; i++) {
    range.push(i);
  }
  return range;
}

module.exports = spinningRings;

console.log(spinningRings(2 ** 24, 3 ** 15));

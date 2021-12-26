function spinningRings(innerMax, outerMax) {
  let innerCount = innerMax;
  let outerCount = 1;
  let count = 1;
  while (innerCount != outerCount && count != 100000) {
    console.log(`Start spin, inner:${innerCount}, outer:${outerCount}`);
    // innerCount = innerCount === innerMax ? 0 : innerCount + 1;
    // outerCount = outerCount === 0 ? outerMax : outerCount - 1;

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

console.log(spinningRings(2, 10));

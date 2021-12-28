function spinningRings(innerMax, outerMax) {
  // return spinningRingsBF(innerMax, outerMax);
  let count = 0, // Inner decreases, outer increases
    innerCount = 0,
    outerCount = 0;

  while (innerCount != outerCount || count == 0) {
    let mod = minDif(outerCount, outerMax, innerCount);
    let comp = maxDif(outerCount, outerMax, innerCount);
    // console.log(
    //   `Start spin, IN:${innerCount}, OUT:${outerCount} [mod:${mod}, comp:${comp}]`
    // );
    if (innerCount < outerCount && mod > 0) {
      innerCount -= mod;
      outerCount += mod;
      count += mod;
    } else if (comp > 10) {
      innerCount -= comp;
      outerCount += comp;
      count += comp;
    } else {
      outerCount += 1;
      innerCount -= 1;
      count += 1;
    }
    innerCount = checkBorders(innerCount, innerMax);
    outerCount = checkBorders(outerCount, outerMax);
  }
  return count;
}

function maxDif(oC, oM, iC) {
  let difference = parseInt((iC - oC) / 2) - 2;
  return difference + oC > oM ? oM - oC : difference;
}

function minDif(oC, oM, iC) {
  let outerDif = oM - oC;
  let returnVal = iC > outerDif ? outerDif : iC;
  // console.log(`Dif val: ${returnVal}`);
  return returnVal;
}

function checkBorders(val, maxVal) {
  if (val < 0) val = maxVal + (val % (maxVal + 1)) + 1;
  if (val > maxVal) val = (val % maxVal) - 1;
  return val;
}

function spinningRingsBF(innerMax, outerMax) {
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

module.exports = spinningRings;

console.log(`FINAL: ${spinningRings(1, 1)}`);
console.log(`FINAL: ${spinningRings(2, 2)}`);
console.log(`FINAL: ${spinningRings(5, 5)}`);
console.log(`FINAL: ${spinningRings(2, 10)}`);
console.log(`FINAL: ${spinningRings(2 ** 24, 3 ** 15)}`);
console.log(`FINAL: ${spinningRings(131983531646778, 90915287537703)}`);

// console.log(`FINAL: ${spinningRings(5362, 253199320071448)}`);

// OLD FUNCTS
// if (innerCount === 0) {
//   innerCount = innerMax;
//   outerCount = outerCount === outerMax ? 0 : outerCount + 1;
//   count += 1;
// }
// if (outerCount === outerMax) {
//   outerCount = 0;
//   innerCount += 1;
//   count += 1;
// }
// outerCount += 1;
// innerCount -= 1;
// count += 1;

// let difference = getDif(innerCount, outerCount);
// innerCount = checkBorders((innerCount -= difference), innerMax);
// outerCount = checkBorders((outerCount += difference), outerMax);
// count += difference;

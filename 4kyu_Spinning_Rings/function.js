function spinningRings(iMax, oMax) {
  // return spinningRingsBF(iMax, outerMax);
  let count = 1, // Inner decreases, outer increases
    iCount = iMax,
    oCount = 1;

  while (iCount != oCount) {
    let mod = 1; //minDif(outerCount, oMax, iCount);
    if (iCount < oCount) {
      seeHERE("MISS [inner < outer]");
      if (oCount <= iMax) mod = setMod("OUT < INmax", 1);
      if (oCount > iMax) mod = setMod("IN < OUT", oMax - oCount + 1);
    } else if ((iCount - oCount) % 2 != 0) {
      seeHERE("MISS [passing by]");
      if (oCount <= iMax) mod = setMod("OUT <= INmax", iCount + 1);
      if (oCount > iMax) mod = setMod("OUT > INmax", oMax - oCount + 1);
    } else if ((iCount - oCount) % 2 == 0) {
      mod = setMod("HIT", iCount - oCount) / 2; // Inner and outer will meet on this spin, go to meeting place
    }
    seeHERE(`  Start spin, IN:${iCount}, OUT:${oCount}, mod:${mod}`);
    iCount -= mod;
    oCount += mod;
    count += mod;

    iCount = checkBorders(iCount, iMax);
    oCount = checkBorders(oCount, oMax);
  }
  return count;
}

function setMod(message, val) {
  seeHERE(message);
  return val;
}

function seeHERE(message) {
  // console.log(message);
}

function checkBorders(val, maxVal) {
  if (val < 0) val = maxVal + (val % (maxVal + 1)) + 1;
  if (val > maxVal) val = (val % maxVal) - 1;
  return val;
}

module.exports = spinningRings;

console.log(`FINAL: ${spinningRings(1, 1)}`); // 1
console.log(`FINAL: ${spinningRings(2, 2)}`); // 3
console.log(`FINAL: ${spinningRings(5, 5)}`); // 3
console.log(`FINAL: ${spinningRings(2, 10)}`); // 13
// console.log(`FINAL: ${spinningRings(16777216, 14348907)}`); // 23951671
// console.log(`FINAL: ${spinningRings(131983531646778, 90915287537703)}`); // 177441175415631
// console.log(`FINAL: ${spinningRings(5362, 253199320071448)}`);

// console.log(`FINAL: ${spinningRingsBF(2, 2)}`); // 13

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

// WORKS FOR SMALLER VALUES
function spinningRingsBF(innerMax, outerMax) {
  let innerCount = innerMax;
  let outerCount = 1;
  let count = 1;
  while (innerCount != outerCount && count != 1000000000) {
    console.log(`Start spin, IN:${innerCount}, OUT:${outerCount}`);
    outerCount = outerCount === outerMax ? 0 : outerCount + 1;
    innerCount = innerCount === 0 ? innerMax : innerCount - 1;
    count += 1;
  }
  return count;
}

// let diff = splitDif(outerCount, innerCount);
//     let comp = maxDif(outerCount, outerMax, innerCount);

// function splitDif(oC, iC) {
//   return parseInt((iC - oC) / 2) - 2;
// }

// function maxDif(oC, oM, iC) {
//   let difference = parseInt((iC - oC) / 2) - 2;
//   return difference + oC > oM ? oM - oC : difference;
// }

// function minDif(oC, oM, iC) {
//   let outerDif = oM - oC;
//   return iC > outerDif ? outerDif : iC;
// }

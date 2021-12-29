function spinningRings(iMax, oMax) {
  // return spinningRingsBF(iMax, outerMax);
  let count = 1, // Inner decreases, outer increases
    iCount = iMax,
    oCount = 1,
    cycles = 0,
    cycleMax = 100000;

  while (iCount != oCount && cycles < cycleMax) {
    seeHERE(`Start spin, DOWN:${iCount}, UP:${oCount}`);
    let mod = 1; //minDif(outerCount, oMax, iCount);
    if (iCount < oCount) {
      seeHERE("   MISS [DOWN < UP]");
      if (oCount <= iMax) mod = setMod("UP <= DOWNmax", 1);
      if (oCount > iMax) mod = setMod("UP > DOWNmax", oMax - oCount + 1);
    } else if ((iCount - oCount) % 2 != 0) {
      seeHERE("   MISS [passing by]");
      if (oCount <= iMax) {
        let oLeft = oMax - oCount + 1;
        let iLeft = iCount + 1;
        mod =
          iLeft > oLeft
            ? setMod("UP <= DOWNmax, 0 outer", oLeft)
            : setMod("UP <= DOWNmax, max inner", iLeft);
      }
      if (oCount > iMax) mod = setMod("UP > DOWNmax", oMax - oCount + 1);
    } else if ((iCount - oCount) % 2 == 0) {
      mod = setMod("HIT", iCount - oCount) / 2; // Inner and outer will meet on this spin, go to meeting place
    }
    seeHERE(`       mod:${mod}`);
    iCount -= mod;
    oCount += mod;
    count += mod;
    seeHERE(`       Postmod spin, DOWN:${iCount}, UP:${oCount}`);

    iCount = iResolve(iCount, iMax);
    oCount = oResolve(oCount, oMax);
    seeHERE(`          Finish spin, DOWN:${iCount}, UP:${oCount}`);
    cycles += 1;
  }
  return cycles === cycleMax ? "Timeout" : count;
}

function setMod(message, val) {
  seeHERE(`     ${message}`);
  return val;
}

function seeHERE(message) {
  // console.log(message);
}

function iResolve(val, max) {
  if (val <= max && val >= 0) return val;
  let spill = ((0 - val + 1) % (max + 1)) - 1;
  return spill > 0 ? max - (spill - 1) : 0 - spill;
}

function oResolve(val, max) {
  if (val <= max && val >= 0) return val;
  let spill = ((val + 1) % (max + 1)) - 1;
  return spill === -1 ? max : spill;
}

function checkBorders(val, maxVal) {
  if (val < 0) val = maxVal + (val % (maxVal + 1)) + 1;
  if (val > maxVal) val = (val % maxVal) - 1;
  if (val < 0) val = 0 - val;
  return val;
}

module.exports = spinningRings;

console.log(`FINAL: ${spinningRings(1, 1)}`); // 1
console.log(`FINAL: ${spinningRings(2, 2)}`); // 3
console.log(`FINAL: ${spinningRings(5, 5)}`); // 3
console.log(`FINAL: ${spinningRings(2, 10)}`); // 13
console.log(`FINAL: ${spinningRings(10, 2)}`); // 10
console.log(`FINAL: ${spinningRings(16777216, 14348907)}`); // 23951671
console.log(`FINAL: ${spinningRings(131983531646778, 90915287537703)}`); // 177441175415631
console.log(`FINAL: ${spinningRings(5362, 253199320071448)}`); // 253199320072568
console.log(`FINAL: ${spinningRings(5028, 845)}`); // 9259

// console.log(`FINAL: ${spinningRingsBF(10, 2)}`); // 13

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

function spinningRings(iMax, oMax) {
  let count = 1, // Inner decreases, outer increases
    iCount = iMax,
    oCount = 1,
    cycles = 0,
    cycleMax = 100000;

  while (iCount != oCount && cycles < cycleMax) {
    let mod = 1; //minDif(outerCount, oMax, iCount);
    if (iCount < oCount) {
      if (oCount <= iMax) mod = 1;
      if (oCount > iMax) mod = oMax - oCount + 1;
    } else if ((iCount - oCount) % 2 != 0) {
      if (oCount <= iMax) {
        let oLeft = oMax - oCount + 1;
        let iLeft = iCount + 1;
        mod = iLeft > oLeft ? (iLeft > oMax ? iLeft - oMax : oLeft) : iLeft;
      }
      if (oCount > iMax) mod = oMax - oCount + 1;
    } else if ((iCount - oCount) % 2 == 0) {
      mod = (iCount - oCount) / 2; // Inner and outer will meet on this spin, go to meeting place
    }
    iCount -= mod;
    oCount += mod;
    count += mod;

    iCount = iResolve(iCount, iMax);
    oCount = oResolve(oCount, oMax);
    cycles += 1;
  }
  return cycles === cycleMax ? "Timeout" : count;
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

module.exports = spinningRings;

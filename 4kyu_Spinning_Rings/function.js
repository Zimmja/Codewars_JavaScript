function spinningRings(iMax, oMax) {
  return spinCycles({ max: iMax, count: iMax }, { max: oMax, count: 1 });
}

function spinCycles(i, o, count = 1) {
  let cycle = { count: 0, max: 10000 };
  while (i.count != o.count && cycle.count < cycle.max) {
    let mod = spin(i, o);
    i.count = resolveRing(i.count - mod, i.max);
    o.count = resolveRing(o.count + mod, o.max);
    count += mod;
    cycle.count += 1;
  }
  return cycle.count === cycle.max ? "Timeout" : count;
}

function spin(i, o, mod = 1) {
  let oLeft = o.max - o.count + 1,
    iLeft = i.count + 1;
  if (cannotHit(i, o)) mod = o.max - o.count + 1;
  if (expectMiss(i, o)) {
    // if (o.count > i.max) mod = oLeft;
    if (o.count <= i.max)
      mod = iLeft > oLeft ? (iLeft > o.max ? iLeft - o.max : oLeft) : iLeft;
  }
  if (expectHit(i, o)) mod = (i.count - o.count) / 2;
  return mod;
}

function cannotHit(i, o) {
  return o.count > i.max;
}

function expectHit(i, o) {
  return (i.count - o.count) % 2 == 0;
}

function expectMiss(i, o) {
  return (i.count - o.count) % 2 != 0;
}

function resolveRing(val, max) {
  if (val <= max && val >= 0) return val;
  return val < 0 ? resolveUnder(val, max) : resolveOver(val, max);
}

function resolveUnder(val, max) {
  let spill = ((0 - val + 1) % (max + 1)) - 1;
  return spill > 0 ? max - (spill - 1) : 0 - spill;
}

function resolveOver(val, max) {
  let spill = ((val + 1) % (max + 1)) - 1;
  return spill === -1 ? max : spill;
}

module.exports = spinningRings;

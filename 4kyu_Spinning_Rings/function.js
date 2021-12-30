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

function spin(i, o) {
  let mod = 1;
  if (i.count < o.count && o.count > i.max) {
    mod = o.max - o.count + 1;
  } else if ((i.count - o.count) % 2 != 0) {
    if (o.count <= i.max) {
      let oLeft = o.max - o.count + 1;
      let iLeft = i.count + 1;
      mod = iLeft > oLeft ? (iLeft > o.max ? iLeft - o.max : oLeft) : iLeft;
    }
    if (o.count > i.max) mod = o.max - o.count + 1;
  } else if ((i.count - o.count) % 2 == 0) {
    mod = (i.count - o.count) / 2;
  }
  return mod;
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

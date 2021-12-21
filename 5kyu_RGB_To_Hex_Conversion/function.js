function rgb(r, g, b) {
  r = verifyRGB(r);
  g = verifyRGB(g);
  b = verifyRGB(b);
  return `${hexify(r)}${hexify(g)}${hexify(b)}`;
}

function verifyRGB(val) {
  if (val < 0) {
    val = 0;
  } else if (val > 255) {
    val = 255;
  }
  return val;
}

function hexify(dec) {
  let hexa = dec.toString(16);
  return formatHex(hexa);
}

function formatHex(hex) {
  let prefix = hex.length === 1 ? "0" : "";
  return `${prefix}${hex}`.toUpperCase();
}

module.exports = rgb;

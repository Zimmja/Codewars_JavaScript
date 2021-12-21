function rgb(r, g, b) {
  return `${hexify(r)}${hexify(g)}${hexify(b)}`;
}

function hexify(val) {
  let hexa = verifyRGB(val).toString(16);
  return formatHex(hexa);
}

function verifyRGB(val) {
  if (val < 0) val = 0;
  return val > 255 ? 255 : val;
}

function formatHex(hex) {
  let prefix = hex.length === 1 ? "0" : "";
  return `${prefix}${hex}`.toUpperCase();
}

module.exports = rgb;

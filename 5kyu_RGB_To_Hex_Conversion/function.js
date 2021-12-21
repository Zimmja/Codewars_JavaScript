function rgb(r, g, b) {
  return `${hexify(r)}${hexify(g)}${hexify(b)}`;
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

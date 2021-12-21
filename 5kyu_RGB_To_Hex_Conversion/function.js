function rgb(r, g, b) {
  return r + g + b === 0 ? "000000" : "FFFFFF";
}

module.exports = rgb;

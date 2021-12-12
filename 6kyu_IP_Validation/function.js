function isValidIP(str) {
  let parts = str.split(".");
  return parts.length === 4;
}

module.exports = isValidIP;

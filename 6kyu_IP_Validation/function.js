function isValidIP(str) {
  let parts = str.split(".");
  if (parts.length != 4) return false;
  return !validMap(parts).includes(false);
}

function validMap(parts) {
  return parts.map((part) => part <= 255 && part >= 0);
}

module.exports = isValidIP;

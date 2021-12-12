function isValidIP(str) {
  let parts = str.split(".");
  if (parts.length != 4) return false;
  return !validMap(parts).includes(false);
}

function validMap(parts) {
  return parts.map((part) => validate(part));
}

function validate(part) {
  if (part.length != parseInt(part).toString().length) return false;
  return part <= 255 && part >= 0;
}

module.exports = isValidIP;

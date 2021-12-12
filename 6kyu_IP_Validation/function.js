function isValidIP(str) {
  let parts = str.split(".");
  if (parts.length != 4) return false;
  let validatedParts = validMap(parts);
  return validatedParts.includes(false) ? false : true;
}

function validMap(parts) {
  return parts.map((part) => (part <= 255 ? true : false));
}

module.exports = isValidIP;

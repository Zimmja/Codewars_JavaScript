function generateHashtag(str) {
  if (isEmpty(str)) return false;
  let hash = getHash(str.split(" "));
  return hash.length > 140 ? false : hash;
}

function isEmpty(str) {
  if (str === "") return true;
  if (str.split(" ").length - 1 === str.length) return true;
  return false;
}

function getHash(words) {
  let hashWords = words.map((word) => capitalize(word));
  return `#${hashWords.join("")}`;
}

function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

module.exports = generateHashtag;

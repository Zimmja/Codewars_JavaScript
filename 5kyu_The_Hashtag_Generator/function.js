function generateHashtag(str) {
  if (str === "") return false;
  let hash = getHash(str.split(" "));
  return hash.length > 140 ? false : `#${hash}`;
}

function getHash(words) {
  let hashWords = words.map((word) => capitalize(word));
  return hashWords.join("");
}

function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

module.exports = generateHashtag;

generateHashtag("hello");

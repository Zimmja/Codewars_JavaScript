function generateHashtag(str) {
  if (str === "") return false;
  let hashWords = getHashWords(str.split(" "));
  let hash = hashWords.join("");
  return hash.length > 140 ? false : `#${hashWords.join("")}`;
}

function getHashWords(words) {
  return words.map((word) => {
    return capitalize(word);
  });
}

function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

module.exports = generateHashtag;

generateHashtag("hello");

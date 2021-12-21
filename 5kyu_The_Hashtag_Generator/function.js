function generateHashtag(str) {
  let words = str.split(" ");
  let hashWords = words.map((word) => {
    return capitalize(word);
  });
  let hash = hashWords.join("");
  return hash.length > 140 ? false : `#${hashWords.join("")}`;
}

function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

module.exports = generateHashtag;

generateHashtag("hello");

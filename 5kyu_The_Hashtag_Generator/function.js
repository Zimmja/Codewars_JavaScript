function generateHashtag(str) {
  let words = str.split(" ");
  let hashWords = words.map((word) => {
    return capitalize(word);
  });
  return `#${hashWords.join("")}`;
}

function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

module.exports = generateHashtag;

generateHashtag("hello");

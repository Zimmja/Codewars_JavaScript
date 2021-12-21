function generateHashtag(str) {
  return `#${capitalize(str)}`;
}

function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}

module.exports = generateHashtag;

generateHashtag("hello");

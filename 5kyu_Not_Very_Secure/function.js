function alphanumeric(string) {
  if (string === "") return false;
  let chars = string.split("");
  let scan = chars.map((char) => charIsAlphNum(char));
  return !scan.includes(false);
}

function charIsAlphNum(char) {
  let alphNum =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return alphNum.includes(char);
}

module.exports = alphanumeric;

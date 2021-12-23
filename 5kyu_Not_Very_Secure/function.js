function alphanumeric(string) {
  //your code here
  return string.includes(" ") ? false : true;
}

module.exports = alphanumeric;

function alphabetPosition(text) {
  let alphPos = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(alphPos);
  return `${alphPos.indexOf(text) + 1}`;
}

module.exports = alphabetPosition;

alphabetPosition("z");

function justify(str, len) {
  let words = str.split(" ");
  let lines = splitIntoLines(words, len);
  let lCount = lines.length;
  let justLines = lines.map((line, i) =>
    justifyLine(line, len, isLast(i, lCount))
  );
  return justLines.join("\n");
}

function isLast(i, iMax) {
  return i === iMax - 1;
}

function splitIntoLines(words, len) {
  let lines = [];
  while (words.length > 0) lines.push(passWordsIntoLine(words, len));
  return lines;
}

function passWordsIntoLine(words, len) {
  let line = [],
    lineLen = len;
  while (lineLen > 0 && words.length > 0) {
    let word = words[0];
    let wordLen = word.length;
    if (wordLen <= lineLen) {
      line.push(words.shift());
      lineLen -= wordLen + 1;
    } else {
      lineLen = 0;
    }
  }
  return line;
}

function justifyLine(line, len, last) {
  if (last) return line.join(" ");
  let wordLengths = line.map((word) => word.length);
  let space = spaceHash(len, wordLengths);
  return addSpacesToLine(space, line);
}

function addSpacesToLine(space, words) {
  return space.spill === 0
    ? words.join(space.str)
    : addUnevenSpacesToLine(words, buildSpaceArr(space));
}

function addUnevenSpacesToLine(words, spaceArr) {
  let output = [],
    cycles = words.length * 2 - 1;
  for (let i = 0; i < cycles; i++) {
    if (i % 2 === 0) output.push(words.shift());
    if (i % 2 != 0) output.push(spaceArr.shift());
  }
  return output.join("");
}

function spaceHash(lineLen, wordLens) {
  let spCount = wordLens.length - 1;
  if (spCount <= 0) return { str: "", spill: 0, count: 0 };
  let charsLeft = lineLen - sumArr(wordLens);
  let spSize = parseInt(charsLeft / spCount);
  let spSpill = charsLeft - spSize * spCount;
  return { str: buildSpace(spSize), spill: spSpill, count: spCount };
}

function buildSpaceArr(space) {
  let spaceArr = new Array(space.count).fill(space.str);
  for (let i = 0; i < space.spill; i++) {
    spaceArr[i] = spaceArr[i] + " ";
  }
  return spaceArr;
}

function buildSpace(count) {
  return new Array(count + 1).join(" ");
}

function sumArr(arr) {
  return arr.reduce((a, b) => a + b);
}

module.exports = justify;

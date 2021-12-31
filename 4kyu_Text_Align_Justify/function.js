function justify(str, len) {
  let words = str.split(" ");
  let wordLengths = words.map((word) => word.length);
  if (wordLengths.length === 1) return str;
  let space = spaceNeeded(len, wordLengths);
  if (space.spill === 0) {
    return words.join(buildSpace(space.size));
  } else {
    let spaces = new Array(space.count).fill(buildSpace(space.size));
    for (let i = 0; i < space.spill; i++) {
      spaces[i] = spaces[i] + " ";
    }
    let output = [];
    let cycles = words.length * 2 - 1;
    for (let j = 0; j < cycles; j++) {
      if (j % 2 === 0) output.push(words.shift());
      if (j % 2 != 0) output.push(spaces.shift());
    }
    return output.join("");
  }
}

function spaceNeeded(lineLength, wordLengths) {
  let wordCount = wordLengths.length;
  let spaceCount = wordCount - 1;
  let spaceLeft = lineLength - sumArr(wordLengths);
  let spaceSize = parseInt(spaceLeft / spaceCount);
  let spaceSpill = lineLength - spaceSize * spaceCount - sumArr(wordLengths);
  return { size: spaceSize, spill: spaceSpill, count: spaceCount };
}

function buildSpace(count) {
  return new Array(count + 1).join(" ");
}

function sumArr(arr) {
  return arr.reduce((a, b) => a + b);
}

module.exports = justify;

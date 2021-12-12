function humanReadable(seconds) {
  let timeBlocks = [3600, 60, 1];
  return timeBlocks.map((bl) => formattedBlockCount(seconds, bl)).join(":");
}

function formattedBlockCount(seconds, block) {
  let blocks = blockCount(seconds, block);
  return `${formatBlock(blocks)}`;
}

function formatBlock(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}

function blockCount(time, block) {
  if (block < 3600) time -= subtractionValue(time, 3600);
  if (block < 60) time -= subtractionValue(time, 60);
  return parseInt(time / block);
}

function subtractionValue(time, sub) {
  return sub * parseInt(time / sub);
}

module.exports = humanReadable;

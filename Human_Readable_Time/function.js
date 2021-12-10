function humanReadable(seconds) {
  let timeBlocks = [3600, 60, 1];
  return timeBlocks.map((block) => findReadable(seconds, block)).join(":");
}

function findReadable(s, b) {
  return `${formatTime(convertTime(s, b))}`;
}

function convertTime(time, divideBy) {
  if (divideBy < 3600) time -= subtractionValue(time, 3600);
  if (divideBy < 60) time -= subtractionValue(time, 60);
  return parseInt(time / divideBy);
}

function subtractionValue(time, sub) {
  return sub * parseInt(time / sub);
}

function formatTime(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}

module.exports = humanReadable;

function humanReadable(seconds) {
  return [
    `${formatTime(convertTime(seconds, 3600))}`,
    `${formatTime(convertTime(seconds, 60))}`,
    `${formatTime(convertTime(seconds, 1))}`,
  ].join(":");
}

function convertTime(time, divideBy) {
  if (divideBy < 3600) time -= 3600 * parseInt(time / 3600);
  if (divideBy < 60) time -= 60 * parseInt(time / 60);
  return parseInt(time / divideBy);
}

function formatTime(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}

module.exports = humanReadable;

// console.log(seconds(3600, 1));
// console.log(seconds(3600, 60));
// console.log(seconds(3600, 3600));

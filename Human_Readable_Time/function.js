function humanReadable(seconds) {
  return `00:00:${formatTime(seconds)}`;
}

function formatTime(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}

module.exports = humanReadable;

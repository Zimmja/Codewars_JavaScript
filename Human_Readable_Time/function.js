function humanReadable(seconds) {
  let mm = parseInt(seconds / 60);
  seconds -= mm * 60;
  return `00:${formatTime(mm)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}

module.exports = humanReadable;

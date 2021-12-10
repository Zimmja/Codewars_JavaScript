function humanReadable(seconds) {
  let hh = parseInt(seconds / 3600);
  seconds -= hh * 3600;
  let mm = parseInt(seconds / 60);
  seconds -= mm * 60;
  return `${formatTime(hh)}:${formatTime(mm)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}

module.exports = humanReadable;

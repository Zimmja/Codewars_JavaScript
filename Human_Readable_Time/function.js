function humanReadable(seconds) {
  return `00:00:${formatTime(seconds)}`;
}

function formatTime(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

module.exports = humanReadable;

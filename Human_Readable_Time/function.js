function humanReadable(seconds) {
  let times = [];
  for (let i = 3600; i >= 1; i /= 60) {
    let time = parseInt(seconds / i);
    times.push(time);
    seconds -= time * i;
  }
  return `${formTime(times[0])}:${formTime(times[1])}:${formTime(times[2])}`;
}

function formTime(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}

module.exports = humanReadable;

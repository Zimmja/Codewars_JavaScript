function solution(input, markers) {
  markers.forEach((marker) => (input = trimMarker(input, marker)));
  return input;
}

function trimMarker(str, marker) {
  let strSplit = str.split(marker);
  return strSplit[0].trim();
}

module.exports = solution;

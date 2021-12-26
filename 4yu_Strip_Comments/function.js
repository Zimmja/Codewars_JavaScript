function solution(input, markers) {
  let lines = input.split("\n");
  let trimmedLines = lines.map((line) => trimLine(line, markers));
  return trimmedLines.join("\n");
}

function trimLine(line, markers) {
  markers.forEach((marker) => (line = trimByMarker(line, marker)));
  return line;
}

function trimByMarker(str, marker) {
  let strSplit = str.split(marker);
  return strSplit[0].trim();
}

module.exports = solution;

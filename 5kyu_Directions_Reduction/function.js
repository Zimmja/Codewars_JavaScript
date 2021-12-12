function dirReduc(arr) {
  let resolved = false;
  while (resolved === false) {
    startLength = arr.length;
    arr = resolveDir(arr);
    resolved = startLength === arr.length;
  }
  return resolveDir(arr);
}

function resolveDir(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (shouldCancel([arr[i], arr[i + 1]])) {
      arr[i] = "";
      arr[i + 1] = "";
    }
  }
  return arr.filter((x) => x != "");
}

function shouldCancel(values) {
  if (values.includes("NORTH") && values.includes("SOUTH")) return true;
  if (values.includes("EAST") && values.includes("WEST")) return true;
  return false;
}

module.exports = dirReduc;

// dirReduc(["NORTH", "SOUTH", "EAST"]);
// dirReduc(["NORTH", "SOUTH", "NORTH", "EAST", "EAST", "WEST"]);

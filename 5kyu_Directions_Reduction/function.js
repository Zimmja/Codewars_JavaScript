function dirReduc(arr) {
  let done = false;
  while (done === false) {
    startLength = arr.length;
    arr = resolveDirs(arr);
    done = startLength === arr.length;
  }
  return arr;
}

function resolveDirs(arr) {
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

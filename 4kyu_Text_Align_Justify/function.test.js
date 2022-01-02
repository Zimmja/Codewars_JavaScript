const justify = require("./function");

const lorum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";
const lorum30 =
  "Lorem  ipsum  dolor  sit amet,\nconsectetur  adipiscing  elit.\nVestibulum    sagittis   dolor\nmauris,  at  elementum  ligula\ntempor  eget.  In quis rhoncus\nnunc,  at  aliquet orci. Fusce\nat   dolor   sit   amet  felis\nsuscipit   tristique.   Nam  a\nimperdiet   tellus.  Nulla  eu\nvestibulum    urna.    Vivamus\ntincidunt  suscipit  enim, nec\nultrices   nisi  volutpat  ac.\nMaecenas   sit   amet  lacinia\narcu,  non dictum justo. Donec\nsed  quam  vel  risus faucibus\neuismod.  Suspendisse  rhoncus\nrhoncus  felis  at  fermentum.\nDonec lorem magna, ultricies a\nnunc    sit    amet,   blandit\nfringilla  nunc. In vestibulum\nvelit    ac    felis   rhoncus\npellentesque. Mauris at tellus\nenim.  Aliquam eleifend tempus\ndapibus. Pellentesque commodo,\nnisi    sit   amet   hendrerit\nfringilla,   ante  odio  porta\nlacus,   ut   elementum  justo\nnulla et dolor.";

test("When the string is one word and shorter than len, return string", () => {
  expect(justify("Hello", 10)).toEqual("Hello");
});

test("When the string is two words and shorter than len, justify to length", () => {
  expect(justify("Hello world! abcdefghijklmno", 15)).toEqual(
    "Hello    world!\nabcdefghijklmno"
  );
});

test("String is three words, shorter than len, evenly spaced", () => {
  expect(justify("Hello there world abcdefghijklmno", 21)).toEqual(
    "Hello   there   world\nabcdefghijklmno"
  );
});

test("String is three words, shorter than len, unevenly spaced", () => {
  expect(justify("Hello there world abcdefghijklmno", 22)).toEqual(
    "Hello    there   world\nabcdefghijklmno"
  );
  expect(justify("How now red cow bow abcdefghijklmno", 22)).toEqual(
    "How  now  red  cow bow\nabcdefghijklmno"
  );
});

test("String has too many words to fit on one line", () => {
  expect(justify("How now red cow bow", 10)).toEqual(
    "How    now\nred    cow\nbow"
  );
});

test("The last line doesn't need to be justified", () => {
  expect(justify("How now red cow", 10)).toEqual("How    now\nred cow");
});

test("Can justify lorum impsum", () => {
  expect(justify(lorum, 30)).toEqual(lorum30);
});

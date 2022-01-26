const eightBit = function (number) {
  return /^([1-9]?\d|1\d\d|2([0-5][0-5]|[0-4]\d))$/.test(number);
};

String.prototype.eightBitNumber = function () {
  return eightBit(this);
};

console.log("0".eightBitNumber());

module.exports = eightBit;

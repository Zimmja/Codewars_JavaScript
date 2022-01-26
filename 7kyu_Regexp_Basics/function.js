const eightBit = (number) => {
  return /(^[1-9]?\d$)|(^1\d\d$)|(^2[0-5][0-5]$)/.test(number);
};

module.exports = eightBit;

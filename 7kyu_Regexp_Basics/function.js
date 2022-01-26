const eightBit = (number) => {
  const regex = /(^\d$)|(^[1-9]\d$)|(^1\d\d$)|(^2[0-5][0-5]$)/;
  return regex.test(number);
};

module.exports = eightBit;

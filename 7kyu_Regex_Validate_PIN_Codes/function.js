const validatePIN = (strPin) => {
  return /^(\d{4}|\d{6})$/.test(strPin);
};

module.exports = validatePIN;

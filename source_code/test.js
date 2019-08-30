const type = require('./type.js');

const {
  isString,
  isNaNStrict,
} = type;

const checkEqual = (a, b, message = '') => {
  if (!isString(message)) {
    throw new SyntaxError('checkEqual args(message) type is not string.');
  }

  if (isNaNStrict(a, b)) {
    return true;
  }
  if (a === b) {
    return true;
  }
  message =
    `Test: ${message}\n` +
    '  A !== B\n' +
    `  A = ${String(a)}\n` +
    `  B = ${String(b)}`;
  console.log(message);
  return false;
};

module.exports = {
  checkEqual,
};


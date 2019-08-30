"use strict";

var type = require('./type.js');

var isString = type.isString,
    isNaNStrict = type.isNaNStrict;

var checkEqual = function checkEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!isString(message)) {
    throw new SyntaxError('checkEqual args(message) type is not string.');
  }

  if (isNaNStrict(a, b)) {
    return true;
  }

  if (a === b) {
    return true;
  }

  message = "Test: ".concat(message, "\n") + '  A !== B\n' + "  A = ".concat(String(a), "\n") + "  B = ".concat(String(b));
  console.log(message);
  return false;
};

module.exports = {
  checkEqual: checkEqual
};
"use strict";

var _require = require('./type.js'),
    _isString = _require._isString,
    _isNaNStrict = _require._isNaNStrict,
    _isFunction = _require._isFunction,
    _isUndefined = _require._isUndefined,
    _isException = _require._isException;

var _require2 = require('./syntax.js'),
    guard = _require2.guard;

var checkEqual = function checkEqual(a, b) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!_isString(message)) {
    throw new SyntaxError('checkEqual args(message) type is not string.');
  }

  if (_isNaNStrict(a, b)) {
    return true;
  }

  if (a === b) {
    return true;
  }

  message = "Test: ".concat(message, "\n") + '  A !== B\n' + "  A = ".concat(String(a), "\n") + "  B = ".concat(String(b));
  console.log(message);
  return false;
};
/**
 * isThrown isThrownValue isThrownException isNotThrown
 */


var isThrown = function isThrown(targetFunc, compareFunc) {
  guard(function () {
    return [[_isFunction(targetFunc), 'isThrown args1(targetFunc) type is not function.'], [_isFunction(compareFunc) || _isUndefined(compareFunc), 'isThrown args2(compareFunc) type is not function or undefined.']];
  }, function () {
    throw new SyntaxError(guard.message());
  });

  try {
    targetFunc();
  } catch (e) {
    if (_isUndefined(compareFunc)) {
      return true;
    }

    return compareFunc(e);
  }

  return false;
};

var isThrownValue = function isThrownValue(targetFunc, thrownValue) {
  return isThrown(targetFunc, function (thrown) {
    return thrown === thrownValue;
  });
};

var isThrownException = function isThrownException(targetFunc, exceptionName) {
  guard(function () {
    return [[_isUndefined(exceptionName) || _isString(exceptionName), 'isThrownException args2(exceptionName) type is not string.']];
  }, function () {
    throw new SyntaxError(guard.message());
  });
  return isThrown(targetFunc, function (thrown) {
    if (_isException(thrown)) {
      if (_isUndefined(exceptionName)) {
        return true;
      }

      return thrown.name === exceptionName;
    }

    return false;
  });
};

var isNotThrown = function isNotThrown(targetFunc) {
  return !isThrown(targetFunc, function () {
    return true;
  });
};

module.exports = {
  checkEqual: checkEqual,
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown
};
"use strict";

var type = require('./type.js');

var _isBoolean = type._isBoolean,
    _isString = type._isString,
    _isFunction = type._isFunction,
    _isArray = type._isArray,
    _isUndefined = type._isUndefined,
    _isException = type._isException;
/**
 * assert
 */

var assert = function assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!_isBoolean(value)) {
    throw new TypeError('assert args1(value) type is not boolean. message:' + message);
  }

  if (!_isString(message)) {
    throw new TypeError('assert args2(message) type is not string. message:' + message);
  }

  if (!value) {
    throw new Error('assert error. message:' + message);
  }
};
/**
 * guard
 */


var guard_status = true;
var guard_message;

var guard = function guard(guardFunc, runFunc) {
  guard_message = '';

  if (guard_status === false) {
    return false;
  }

  if (!_isFunction(guardFunc)) {
    throw new SyntaxError('guard args1(guardFunc) type is not function.');
  }

  var result = guardFunc();

  if (!_isArray(result)) {
    throw new SyntaxError('guard args1(guardFunc) result type is not array.');
  }

  for (var i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if (i === result.length - 1 && _isUndefined(result[i])) {
      continue;
    }

    var resultValue = undefined;
    var message = '';

    if (_isArray(result[i])) {
      if (!(1 <= result[i].length)) {
        throw new SyntaxError('guard args1(guardFunc) result item is not array.length >= 1.');
      }

      resultValue = result[i][0];

      if (2 <= result[i].length) {
        message = result[i][1];
      }
    } else {
      resultValue = result[i];
    }

    resultValue = functionValue(resultValue);

    if (!_isBoolean(resultValue)) {
      throw new SyntaxError('guard args1(guardFunc) result item value type is not boolean.');
    }

    if (resultValue === false) {
      guard_message = message;

      if (!_isUndefined(runFunc)) {
        if (!_isFunction(runFunc)) {
          throw new SyntaxError('guard args2(runFunc) type is not function');
        }

        runFunc();
      }

      return true;
    }
  }

  return false;
};

guard.message = function () {
  return guard_message;
};

guard.status = function (value) {
  return guard_status = value;
};

guard.on = function () {
  guard_status = true;
};

guard.off = function () {
  guard_status = false;
};
/**
 * function Value
 */


var functionValue = function functionValue(value) {
  if (_isFunction(value)) {
    return value();
  } else {
    return value;
  }
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
  assert: assert,
  guard: guard,
  isThrown: isThrown,
  isThrownValue: isThrownValue,
  isThrownException: isThrownException,
  isNotThrown: isNotThrown
};
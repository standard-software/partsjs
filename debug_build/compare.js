"use strict";

var _require = require('./type.js'),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isError = _require._isError,
    _isException = _require._isException;

var _require2 = require('./syntax.js'),
    assert = _require2.assert,
    guard = _require2.guard,
    if_ = _require2.if_;

var equal = function equal(valueA, valueB) {
  return valueA === valueB;
};

var or = function or(value, compareArray) {
  assert(_isArray(compareArray));

  for (var i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }

  return false;
};

var _match = function _match(matchFunc, value, compareArray) {
  guard(function () {
    return [[_isArray(compareArray), '_match args2(compareArray) type is not Array.']];
  }, function () {
    throw new TypeError(guard.message());
  });

  if (_isString(value)) {
    return compareArray.some(function (element) {
      var result;

      if (_isRegExp(element)) {
        result = value.match(element) !== null;
      } else if (_isFunction(element)) {
        result = element(value);
      } else {
        result = matchFunc(value, element);
      }

      if (!_isBoolean(result)) {
        throw new SyntaxError('_match args2(compareArray) Array element result is not Boolean.');
      }

      return result;
    });
  } else {
    return compareArray.some(function (element) {
      var result;

      if (_isFunction(element)) {
        result = element(value);
      } else {
        result = matchFunc(value, element);
      }

      if (!_isBoolean(result)) {
        throw new SyntaxError('_match args2(compareArray) Array element result is not Boolean.');
      }

      return result;
    });
  }
};

var match = function match(value, compareArray) {
  var matchFunc = function matchFunc(a, b) {
    return a === b;
  };

  var parameter = if_(_isObject(value))({
    then: value,
    "else": {
      value: value,
      compareArray: compareArray
    }
  });
  return _match(matchFunc, parameter.value, parameter.compareArray);
};

var _matchValue = function _matchValue(value, compareArray, inMatchValue) {
  var matchFunc = function matchFunc(a, b) {
    return a === b;
  };

  if (_match(matchFunc, value, compareArray)) {
    return inMatchValue;
  }

  return value;
};

var matchValue = function matchValue(value, compareArray, inMatchValue) {
  var parameter = if_(_isObject(value))({
    then: value,
    "else": {
      value: value,
      compareArray: compareArray,
      inMatchValue: inMatchValue
    }
  });
  return _matchValue(parameter.value, parameter.compareArray, parameter.inMatchValue);
};

var defaultValue = function defaultValue(value, inMatchValue) {
  var parameter = if_(_isObject(value))({
    then: value,
    "else": {
      value: value,
      inMatchValue: inMatchValue
    }
  });
  return _matchValue(parameter.value, [_isUndefined, _isNull], parameter.inMatchValue);
};

module.exports = {
  equal: equal,
  or: or,
  match: match,
  matchValue: matchValue,
  defaultValue: defaultValue
};
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
    _isException = _require._isException,
    _isNotUndefined = _require._isNotUndefined,
    _isNotNull = _require._isNotNull,
    _isNotNaNStrict = _require._isNotNaNStrict,
    _isNotBoolean = _require._isNotBoolean,
    _isNotNumber = _require._isNotNumber,
    _isNotInteger = _require._isNotInteger,
    _isNotString = _require._isNotString,
    _isNotFunction = _require._isNotFunction,
    _isNotObject = _require._isNotObject,
    _isNotArray = _require._isNotArray,
    _isNotDate = _require._isNotDate,
    _isNotRegExp = _require._isNotRegExp,
    _isNotException = _require._isNotException;

var _require2 = require('./compare.js'),
    _matchValue = _require2._matchValue,
    _initialValue = _require2._initialValue;

var _require3 = require('./string.js'),
    _matchFormat = _require3._matchFormat;
/**
 * numberToString
 */


var _numberToString = function _numberToString(value, radix) {
  radix = _initialValue(radix, 10);
  return value.toString(radix);
};

var numberToString = function numberToString(value, radix) {
  radix = _initialValue(radix, 10);
  var param;

  if (_isObject(value)) {
    if ('value' in value) {
      param = value;
      param.radix = _initialValue(param.radix, radix);
    } else {
      throw new ReferenceError('numberToString parameter args(value) is not defined');
    }
  } else {
    param = {
      value: value,
      radix: radix
    };
  }

  if (!_isNumber(param.value)) {
    throw new TypeError('numberToString args(value) is not number');
  }

  if (!_isInteger(param.radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= param.radix && param.radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  return _numberToString(param.value, param.radix);
};
/**
 * stringToNumber
 */


var _stringToNumber = function _stringToNumber(value, defaultValue) {
  if (!_matchFormat('float', value)) {
    return defaultValue;
  }

  return _matchValue(Number(value), [_isNotNumber], defaultValue);
};

var stringToNumber = function stringToNumber(value, defaultValue) {
  var param;

  if (_isObject(value)) {
    if ('value' in value) {
      param = value;
    } else {
      throw new ReferenceError('stringToNumber parameter args(value) is not defined');
    }
  } else {
    param = {
      value: value,
      defaultValue: defaultValue
    };
  }

  if (!_isString(param.value)) {
    throw new TypeError('stringToNumber args(value) is not string');
  }

  return _stringToNumber(param.value, param.defaultValue);
};
/**
 * stringToInteger
 */


var _stringToInteger = function _stringToInteger(value, defaultValue, radix) {
  radix = _initialValue(radix, 10);

  if (!_matchFormat(String(radix) + '_base_number', value)) {
    return defaultValue;
  }

  return _matchValue(parseInt(value, radix), [_isNotInteger], defaultValue);
};

var stringToInteger = function stringToInteger(value, defaultValue, radix) {
  radix = _initialValue(radix, 10);
  var param;

  if (_isObject(value)) {
    if ('value' in value) {
      param = value;
      param.radix = _initialValue(param.radix, radix);
    } else {
      throw new ReferenceError('stringToInteger parameter args(value) is not defined');
    }
  } else {
    param = {
      value: value,
      defaultValue: defaultValue,
      radix: radix
    };
  }

  if (!_isString(param.value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!_isInteger(param.radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= param.radix && param.radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToInteger(param.value, param.defaultValue, param.radix);
};

module.exports = {
  numberToString: numberToString,
  stringToNumber: stringToNumber,
  stringToInteger: stringToInteger
};
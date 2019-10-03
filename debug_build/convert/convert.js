"use strict";

var _require = require('../type/type.js'),
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

var _require2 = require('../compare/compare.js'),
    _matchValue = _require2._matchValue,
    _initialValue = _require2._initialValue;

var _require3 = require('../string/string.js'),
    _matchFormat = _require3._matchFormat;
/**
 * numberToString
 */


var _numberToString = function _numberToString(value, radix) {
  radix = _initialValue(radix, 10);
  return value.toString(radix);
};

var numberToString = function numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (_isObject(value) && 'value' in value) {
    var _value = value;
    value = _value.value;
    var _value$radix = _value.radix;
    radix = _value$radix === void 0 ? 10 : _value$radix;
  }

  if (!_isNumber(value)) {
    throw new TypeError('numberToString args(value) is not number');
  }

  if (!_isInteger(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  return _numberToString(value, radix);
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
  if (_isObject(value) && 'value' in value) {
    var _value2 = value;
    value = _value2.value;
    defaultValue = _value2.defaultValue;
  }

  if (!_isString(value)) {
    throw new TypeError('stringToNumber args(value) is not string');
  }

  return _stringToNumber(value, defaultValue);
};
/**
 * stringToInteger
 */


var _stringToInteger = function _stringToInteger(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (!_matchFormat(String(radix) + '_base_number', value)) {
    return defaultValue;
  }

  return _matchValue(parseInt(value, radix), [_isNotInteger], defaultValue);
};

var stringToInteger = function stringToInteger(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (_isObject(value) && 'value' in value) {
    var _value3 = value;
    value = _value3.value;
    defaultValue = _value3.defaultValue;
    var _value3$radix = _value3.radix;
    radix = _value3$radix === void 0 ? 10 : _value3$radix;
  }

  if (!_isString(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!_isInteger(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToInteger(value, defaultValue, radix);
};

var numToString = numberToString;
var strToNumber = stringToNumber;
var strToInteger = stringToInteger;
var numToStr = numberToString;
var strToNum = stringToNumber;
var strToInt = stringToInteger;
module.exports = {
  numberToString: numberToString,
  stringToNumber: stringToNumber,
  stringToInteger: stringToInteger,
  numToString: numToString,
  strToNumber: strToNumber,
  strToInteger: strToInteger,
  numToStr: numToStr,
  strToNum: strToNum,
  strToInt: strToInt
};
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

var _require4 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require4.isObjectParameter;

var _require5 = require('../number/number.js'),
    _round = _require5._round;
/**
 * numberToString
 */


var _numberToString = function _numberToString(value, radix) {
  radix = _initialValue(radix, 10);
  return value.toString(radix);
};

var numberToString = function numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (isObjectParameter(value, 'value', 'radix')) {
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


var _stringToNumberBase = function _stringToNumberBase(value, defaultValueFunc) {
  if (value === '') {
    return defaultValueFunc();
  }

  if (!_matchFormat('float_more', value)) {
    return defaultValueFunc();
  }

  var result = Number(value);

  if (!_isNumber(result)) {
    return defaultValueFunc();
  }

  return result;
};

var _stringToNumber = function _stringToNumber(value) {
  return _stringToNumberBase(value, function () {
    throw new RangeError('stringToNumber args(value) is not changeing number');
  });
};

var stringToNumber = function stringToNumber(value) {
  if (isObjectParameter(value, 'value')) {
    var _value2 = value;
    value = _value2.value;
  }

  if (!_isString(value)) {
    throw new TypeError('stringToNumber args(value) is not string');
  }

  return _stringToNumber(value);
};

var _stringToNumberDefault = function _stringToNumberDefault(value, defaultValue) {
  return _stringToNumberBase(value, function () {
    return defaultValue;
  });
};

var stringToNumberDefault = function stringToNumberDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value', 'defaultValue')) {
    var _value3 = value;
    value = _value3.value;
    defaultValue = _value3.defaultValue;
  }

  if (!_isString(value)) {
    throw new TypeError('stringToNumberDefault args(value) is not string');
  }

  return _stringToNumberDefault(value, defaultValue);
};
/**
 * stringToInteger
 */


var _stringToIntegerBase = function _stringToIntegerBase(value, defaultValueFunc) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (value === '') {
    return defaultValueFunc();
  }

  if (!_matchFormat(String(radix) + '_base_number', value)) {
    return defaultValueFunc();
  }

  var result = parseInt(value, radix);

  if (!_isInteger(result)) {
    return defaultValueFunc();
  }

  return result;
};

var _stringToInteger = function _stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return _stringToNumberBase(value, function () {
    throw new RangeError('stringToInteger args(value) is not changeing integer');
  }, radix);
};

var stringToInteger = function stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (isObjectParameter(value, 'value', 'radix')) {
    var _value4 = value;
    value = _value4.value;
    var _value4$radix = _value4.radix;
    radix = _value4$radix === void 0 ? 10 : _value4$radix;
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

  return _stringToInteger(value, radix);
};

var _stringToIntegerDefault = function _stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return _stringToIntegerBase(value, function () {
    return defaultValue;
  }, radix);
};

var stringToIntegerDefault = function stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (isObjectParameter(value, 'value', 'defaultValue, radix')) {
    var _value5 = value;
    value = _value5.value;
    defaultValue = _value5.defaultValue;
    var _value5$radix = _value5.radix;
    radix = _value5$radix === void 0 ? 10 : _value5$radix;
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

  return _stringToIntegerDefault(value, defaultValue, radix);
};
/**
 * toNumber
 */


var toNumber = function toNumber(value) {
  if (_isNull(value)) {
    return NaN;
  }

  if (!_isString(value)) {
    return Number(value);
  }

  return stringToNumberDefault(value, NaN);
};

var toNumberDefault = function toNumberDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value,defaultValue')) {
    var _value6 = value;
    value = _value6.value;
    defaultValue = _value6.defaultValue;
  }

  var result = toNumber(value);

  if (_isNaNStrict(result)) {
    return defaultValue;
  }

  return result;
};
/**
 * toInteger
 */


var toInteger = function toInteger(value) {
  var result = toNumber(value);

  if (_isNaNStrict(result)) {
    return NaN;
  }

  return _round(result);
};

var toIntegerDefault = function toIntegerDefault(value, defaultValue) {
  if (isObjectParameter(value, 'value,defaultValue')) {
    var _value7 = value;
    value = _value7.value;
    defaultValue = _value7.defaultValue;
  }

  var result = toInteger(value);

  if (_isNaNStrict(result)) {
    return defaultValue;
  }

  return result;
};

var numToString = numberToString;
var strToNumber = stringToNumber;
var strToNumberDef = stringToNumberDefault;
var strToInteger = stringToInteger;
var strToIntegerDef = stringToIntegerDefault;
var numToStr = numberToString;
var strToNum = stringToNumber;
var strToNumDef = stringToNumberDefault;
var strToInt = stringToInteger;
var strToIntDef = stringToIntegerDefault;
var toNum = toNumber;
var toNumDef = toNumberDefault;
var toInt = toInteger;
var toIntDef = toIntegerDefault;
module.exports = {
  numberToString: numberToString,
  stringToNumber: stringToNumber,
  stringToNumberDefault: stringToNumberDefault,
  stringToInteger: stringToInteger,
  stringToIntegerDefault: stringToIntegerDefault,
  toNumber: toNumber,
  toNumberDefault: toNumberDefault,
  toInteger: toInteger,
  toIntegerDefault: toIntegerDefault,
  numToString: numToString,
  strToNumber: strToNumber,
  strToNumberDef: strToNumberDef,
  strToInteger: strToInteger,
  strToIntegerDef: strToIntegerDef,
  toNum: toNum,
  toNumDef: toNumDef,
  toInt: toInt,
  toIntDef: toIntDef,
  numToStr: numToStr,
  strToNum: strToNum,
  strToNumDef: strToNumDef,
  strToInt: strToInt,
  strToIntDef: strToIntDef
};
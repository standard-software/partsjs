"use strict";

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../type/type.js'),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;
/**
 * isMultiples isEven isOdd
 */


var _isMultiples = function _isMultiples(number, radix) {
  return number % radix === 0;
};

var isMultiples = function isMultiples(number, radix) {
  if (isObjectParameter(number, 'number,radix')) {
    var _number = number;
    number = _number.number;
    radix = _number.radix;
  }

  if (!isInteger(number)) {
    throw new TypeError('isMultiples args(number) is not integer');
  }

  if (!isInteger(radix)) {
    throw new TypeError('isMultiples args(radix) is not integer');
  }

  return _isMultiples(number, radix);
};

var isEven = function isEven(number) {
  return isMultiples(number, 2);
};

var isOdd = function isOdd(number) {
  return !isMultiples(number, 2);
};
/**
 * round
 */


var _round = function _round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value ? true : false;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

var round = function round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isObjectParameter(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  }

  if (!isInteger(digit)) {
    throw new TypeError('round args(value) is not integer');
  }

  return _round(value, digit);
};
/**
 * nearEqual
 */


var _nearEqual = function _nearEqual(value1, value2, diff) {
  if (Math.abs(value1 - value2) <= diff) {
    return true;
  } else {
    return false;
  }
};

var nearEqual = function nearEqual(value1, value2, diff) {
  if (isObjectParameter(value1, 'value1,value2,diff')) {
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
    diff = _value2.diff;
  }

  if (!isNumber(value1)) {
    throw new TypeError('nearEqual args(value1) is not number');
  }

  if (!isNumber(value2)) {
    throw new TypeError('nearEqual args(value2) is not number');
  }

  if (!isNumber(diff)) {
    throw new TypeError('nearEqual args(diff) is not number');
  }

  if (diff < 0) {
    throw new RangeError('nearEqual args(diff) must be < 0');
  }

  return _nearEqual(value1, value2, diff);
};
/**
 * inRange
 */


var _inRange = function _inRange(value, from, to) {
  if (from <= value && value <= to) {
    return true;
  } else {
    return false;
  }
};

var inRange = function inRange(value, from, to) {
  if (isObjectParameter(value, 'value,from,to')) {
    var _value3 = value;
    value = _value3.value;
    from = _value3.from;
    to = _value3.to;
  }

  if (!isNumber(value)) {
    throw new TypeError('inRange args(value) is not number');
  }

  if (!isNumber(from)) {
    throw new TypeError('inRange args(from) is not number');
  }

  if (!isNumber(to)) {
    throw new TypeError('inRange args(to) is not number');
  }

  if (!(from <= to)) {
    throw new RangeError('inRange args(from,to) must be from <= to');
  }

  return _inRange(value, from, to);
};
/**
 * randomInt
 */


var _randomInt = function _randomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var randomInt = function randomInt(min, max) {
  if (isObjectParameter(min, 'min,max')) {
    var _min = min;
    min = _min.min;
    max = _min.max;
  }

  if (!isInteger(min)) {
    throw new TypeError('randomInt args(min) is not integer');
  }

  if (!isInteger(max)) {
    throw new TypeError('randomInt args(max) is not integer');
  }

  return _randomInt(min, max);
};

module.exports = (_module$exports = {
  isMultiples: isMultiples,
  _round: _round,
  _nearEqual: _nearEqual,
  _inRange: _inRange
}, _defineProperty(_module$exports, "isMultiples", isMultiples), _defineProperty(_module$exports, "isEven", isEven), _defineProperty(_module$exports, "isOdd", isOdd), _defineProperty(_module$exports, "round", round), _defineProperty(_module$exports, "nearEqual", nearEqual), _defineProperty(_module$exports, "inRange", inRange), _defineProperty(_module$exports, "randomInt", randomInt), _module$exports);
"use strict";

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

var _require3 = require('../number/number.js'),
    _inRange = _require3._inRange;

var _require4 = require('../array/array.js'),
    _max = _require4._max;
/**
 * repeat
 */


var _repeat = function _repeat(str, count) {
  var result = '';

  for (var i = 0; i < count; i += 1) {
    result += str;
  }

  return result;
};

var repeat = function repeat(str, count) {
  if (isObjectParameter(str, 'str, count')) {
    var _str = str;
    str = _str.str;
    count = _str.count;
  }

  if (!isString(str)) {
    throw new TypeError('repeat args(str) is not string');
  }

  if (!isInteger(count)) {
    throw new TypeError('repeat args(count) is not integer');
  }

  return _repeat(str, count);
};
/**
 * isLowerCase
 */


var _isLowerCase = function _isLowerCase(str) {
  return str.toLowerCase() === str;
};

var isLowerCase = function isLowerCase(str) {
  if (!isString(str)) {
    throw new TypeError('isLowerCase args(str) is not string');
  }

  return _isLowerCase(str);
};
/**
 * isUpperCase
 */


var _isUpperCase = function _isUpperCase(str) {
  return str.toUpperCase() === str;
};

var isUpperCase = function isUpperCase(str) {
  if (!isString(str)) {
    throw new TypeError('isUpperCase args(str) is not string');
  }

  return _isUpperCase(str);
};
/**
 * indexOfFirst
 */


var _indexOfFirst = function _indexOfFirst(str, search, startIndex) {
  if (search === '') {
    return -1;
  }

  return str.indexOf(search, startIndex);
};

var indexOfFirst = function indexOfFirst(str, search) {
  var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(str, 'str, search', 'startIndex')) {
    var _str2 = str;
    str = _str2.str;
    search = _str2.search;
    var _str2$startIndex = _str2.startIndex;
    startIndex = _str2$startIndex === void 0 ? 0 : _str2$startIndex;
  }

  if (!isString(str)) {
    throw new TypeError('indexOfFirst args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('indexOfFirst args(search) is not string');
  }

  if (!isInteger(startIndex)) {
    throw new TypeError('indexOfFirst args(startIndex) is not integer');
  }

  if (!_inRange(startIndex, 0, _max([0, str.length - 1]))) {
    throw new RangeError('indexOfFirst args(startIndex) must be from 0 to str.length - 1');
  }

  return _indexOfFirst(str, search, startIndex);
};
/**
 * indexOfLast
 */


var _indexOfLast = function _indexOfLast(str, search) {
  var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);

  if (search === '') {
    return -1;
  }

  return str.lastIndexOf(search, startIndex);
};

var indexOfLast = function indexOfLast(str, search) {
  var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);

  if (isObjectParameter(str, 'str, search', 'startIndex')) {
    var _str3 = str;
    str = _str3.str;
    search = _str3.search;
    var _str3$startIndex = _str3.startIndex;
    startIndex = _str3$startIndex === void 0 ? _max([0, str.length - 1]) : _str3$startIndex;
  }

  if (!isString(str)) {
    throw new TypeError('indexOfLast args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('indexOfLast args(search) is not string');
  }

  if (!isInteger(startIndex)) {
    throw new TypeError('indexOfLast args(startIndex) is not integer');
  }

  if (!_inRange(startIndex, 0, _max([0, str.length - 1]))) {
    throw new RangeError('indexOfLast args(startIndex) must be from 0 to str.length - 1');
  }

  return _indexOfLast(str, search, startIndex);
};
/**
 * isFirst
 */


var _isFirst = function _isFirst(str, search) {
  return _indexOfFirst(str, search) === 0;
};

var isFirst = function isFirst(str, search) {
  if (isObjectParameter(str, 'str, search')) {
    var _str4 = str;
    str = _str4.str;
    search = _str4.search;
  }

  if (!isString(str)) {
    throw new TypeError('isFirst args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('isFirst args(search) is not string');
  }

  return _isFirst(str, search);
};
/**
 * isLast
 */


var _isLast = function _isLast(str, search) {
  return _indexOfLast(str, search) === str.length - search.length;
};

var isLast = function isLast(str, search) {
  if (isObjectParameter(str, 'str, search')) {
    var _str5 = str;
    str = _str5.str;
    search = _str5.search;
  }

  if (!isString(str)) {
    throw new TypeError('isLast args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('isLast args(search) is not string');
  }

  return _isLast(str, search);
};

module.exports = {
  _repeat: _repeat,
  _isLowerCase: _isLowerCase,
  _isUpperCase: _isUpperCase,
  _indexOfFirst: _indexOfFirst,
  _indexOfLast: _indexOfLast,
  _isFirst: _isFirst,
  _isLast: _isLast,
  repeat: repeat,
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  indexOfFirst: indexOfFirst,
  indexOfLast: indexOfLast,
  isFirst: isFirst,
  isLast: isLast
};
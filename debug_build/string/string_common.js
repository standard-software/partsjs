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
    _min = _require4._min,
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


var _indexOfFirst = function _indexOfFirst(str, search, indexStart) {
  if (search === '') {
    return -1;
  }

  return str.indexOf(search, indexStart);
};

var indexOfFirst = function indexOfFirst(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    var _str2 = str;
    str = _str2.str;
    search = _str2.search;
    var _str2$indexStart = _str2.indexStart;
    indexStart = _str2$indexStart === void 0 ? 0 : _str2$indexStart;
  }

  if (!isString(str)) {
    throw new TypeError('indexOfFirst args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('indexOfFirst args(search) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('indexOfFirst args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError('indexOfFirst args(indexStart) must be from 0 to str.length - 1');
  }

  return _indexOfFirst(str, search, indexStart);
};
/**
 * indexOfLast
 */


var _indexOfLast = function _indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);

  if (search === '') {
    return -1;
  }

  return str.lastIndexOf(search, indexStart);
};

var indexOfLast = function indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);

  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    var _str3 = str;
    str = _str3.str;
    search = _str3.search;
    var _str3$indexStart = _str3.indexStart;
    indexStart = _str3$indexStart === void 0 ? _max([0, str.length - 1]) : _str3$indexStart;
  }

  if (!isString(str)) {
    throw new TypeError('indexOfLast args(str) is not string');
  }

  if (!isString(search)) {
    throw new TypeError('indexOfLast args(search) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('indexOfLast args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError('indexOfLast args(indexStart) must be from 0 to str.length - 1');
  }

  return _indexOfLast(str, search, indexStart);
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
/**
 * isBothEnds
 */


var _isBothEnds = function _isBothEnds(str, searchFirst) {
  var searchLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : searchFirst;

  if (str.length <= 1) {
    return false;
  }

  return _isFirst(str, searchFirst) && _isLast(str, searchLast);
};

var isBothEnds = function isBothEnds(str, searchFirst) {
  var searchLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : searchFirst;

  if (isObjectParameter(str, 'str, searchFirst', 'searchLast')) {
    var _str6 = str;
    str = _str6.str;
    searchFirst = _str6.searchFirst;
    var _str6$searchLast = _str6.searchLast;
    searchLast = _str6$searchLast === void 0 ? searchFirst : _str6$searchLast;
  } else if (isObjectParameter(str, 'str, search')) {
    var _str7 = str;
    str = _str7.str;
    searchFirst = _str7.search;
    searchLast = searchFirst;
  }

  if (!isString(str)) {
    throw new TypeError('isBothEnds args(str) is not string');
  }

  if (!isString(searchFirst)) {
    throw new TypeError('isBothEnds args(searchFirst) is not string');
  }

  if (!isString(searchLast)) {
    throw new TypeError('isBothEnds args(searchLast) is not string');
  }

  return _isBothEnds(str, searchFirst, searchLast);
};
/**
 * subIndex
 */


var _subIndex = function _subIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  return str.substring(indexStart, indexEnd + 1);
};

var subIndex = function subIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if (isObjectParameter(str, 'str, indexStart', 'indexEnd')) {
    var _str8 = str;
    str = _str8.str;
    indexStart = _str8.indexStart;
    var _str8$indexEnd = _str8.indexEnd;
    indexEnd = _str8$indexEnd === void 0 ? indexStart : _str8$indexEnd;
  }

  if (!isString(str)) {
    throw new TypeError('subIndex args(str) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('subIndex args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, str.length - 1)) {
    throw new RangeError('subIndex args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(indexEnd)) {
    throw new TypeError('subIndex args(indexEnd) is not integer');
  }

  if (!_inRange(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError('subIndex args(indexEnd) must be from indexStart to str.length - 1');
  }

  return _subIndex(str, indexStart, indexEnd);
};
/**
 * subLength
 */


var _subLength = function _subLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;
  return str.substring(index, index + length);
};

var subLength = function subLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;

  if (isObjectParameter(str, 'str, index', 'length')) {
    var _str9 = str;
    str = _str9.str;
    index = _str9.index;
    var _str9$length = _str9.length;
    length = _str9$length === void 0 ? str.length - index : _str9$length;
  }

  if (!isString(str)) {
    throw new TypeError('subLength args(str) is not string');
  }

  if (!isInteger(index)) {
    throw new TypeError('subLength args(indexStart) is not integer');
  }

  if (!_inRange(index, 0, str.length - 1)) {
    throw new RangeError('subLength args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLength args(length) is not integer');
  }

  length = _min([length, str.length - index]);

  if (!_inRange(length, 0, str.length - index)) {
    throw new RangeError('subLength args(length) must be from 0 to str.length - indexStart');
  }

  return _subLength(str, index, length);
};
/**
 * subFirst
 */


var _subFirst = function _subFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(str, 0, length);
};

var subFirst = function subFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str10 = str;
    str = _str10.str;
    var _str10$length = _str10.length;
    length = _str10$length === void 0 ? 1 : _str10$length;
  }

  if (!isString(str)) {
    throw new TypeError('subFirst args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('subFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('subFirst args(length) must be from 0 to str.length');
  }

  return _subFirst(str, length);
};
/**
 * subLast
 */


var _subLast = function _subLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _subLength(str, str.length - length, length);
};

var subLast = function subLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str11 = str;
    str = _str11.str;
    var _str11$length = _str11.length;
    length = _str11$length === void 0 ? 1 : _str11$length;
  }

  if (!isString(str)) {
    throw new TypeError('subLast args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('subLast args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('subLast args(length) must be from 0 to str.length');
  }

  return _subLast(str, length);
};

module.exports = {
  _repeat: _repeat,
  _isLowerCase: _isLowerCase,
  _isUpperCase: _isUpperCase,
  _indexOfFirst: _indexOfFirst,
  _indexOfLast: _indexOfLast,
  _isFirst: _isFirst,
  _isLast: _isLast,
  _isBothEnds: _isBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  repeat: repeat,
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  indexOfFirst: indexOfFirst,
  indexOfLast: indexOfLast,
  isFirst: isFirst,
  isLast: isLast,
  isBothEnds: isBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast
};
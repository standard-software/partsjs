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
 * string.includeFirst
 */


var _includeFirst = function _includeFirst(str, value) {
  if (!_isFirst(str, value)) {
    return value + str;
  }

  return str;
};

var includeFirst = function includeFirst(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str8 = str;
    str = _str8.str;
    value = _str8.value;
  }

  if (!isString(str)) {
    throw new TypeError('includeFirst args(str) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('includeFirst args(value) is not string');
  }

  return _includeFirst(str, value);
};
/**
 * string.includeLast
 */


var _includeLast = function _includeLast(str, value) {
  if (!_isLast(str, value)) {
    return str + value;
  }

  return str;
};

var includeLast = function includeLast(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str9 = str;
    str = _str9.str;
    value = _str9.value;
  }

  if (!isString(str)) {
    throw new TypeError('includeLast args(str) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('includeLast args(value) is not string');
  }

  return _includeLast(str, value);
};
/**
 * string.includeBothEnds
 */


var _includeBothEnds = function _includeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (!_isBothEnds(str, valueFirst, valueLast)) {
    return valueFirst + str + valueLast;
  }

  return str;
};

var includeBothEnds = function includeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(str, 'str, valueFirst', 'valueLast')) {
    var _str10 = str;
    str = _str10.str;
    valueFirst = _str10.valueFirst;
    var _str10$valueLast = _str10.valueLast;
    valueLast = _str10$valueLast === void 0 ? valueFirst : _str10$valueLast;
  } else if (isObjectParameter(str, 'str, value')) {
    var _str11 = str;
    str = _str11.str;
    valueFirst = _str11.value;
    valueLast = valueFirst;
  }

  if (!isString(str)) {
    throw new TypeError('includeBothEnds args(str) is not string');
  }

  if (!isString(valueFirst)) {
    throw new TypeError('includeBothEnds args(valueFirst) is not string');
  }

  if (!isString(valueLast)) {
    throw new TypeError('includeBothEnds args(valueLast) is not string');
  }

  return _includeBothEnds(str, valueFirst, valueLast);
};
/**
 * string.excludeFirst
 */


var _excludeFirst = function _excludeFirst(str, value) {
  if (_isFirst(str, value)) {
    return _deleteFirst(str, value.length);
  }

  return str;
};

var excludeFirst = function excludeFirst(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str12 = str;
    str = _str12.str;
    value = _str12.value;
  }

  if (!isString(str)) {
    throw new TypeError('excludeFirst args(array) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('excludeFirst args(value) is not string');
  }

  return _excludeFirst(str, value);
};
/**
 * string.excludeLast
 */


var _excludeLast = function _excludeLast(str, value) {
  if (_isLast(str, value)) {
    return _deleteLast(str, value.length);
  }

  return str;
};

var excludeLast = function excludeLast(str, value) {
  if (isObjectParameter(str, 'str, value')) {
    var _str13 = str;
    str = _str13.str;
    value = _str13.value;
  }

  if (!isString(str)) {
    throw new TypeError('excludeLast args(array) is not string');
  }

  if (!isString(value)) {
    throw new TypeError('excludeLast args(value) is not string');
  }

  return _excludeLast(str, value);
};
/**
 * string.excludeBothEnds
 */


var _excludeBothEnds = function _excludeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (_isBothEnds(str, valueFirst, valueLast)) {
    str = deleteFirst(str, valueFirst.length);
    return deleteLast(str, _min([valueLast.length, str.length]));
  }

  return str;
};

var excludeBothEnds = function excludeBothEnds(str, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(str, 'str, valueFirst', 'valueLast')) {
    var _str14 = str;
    str = _str14.str;
    valueFirst = _str14.valueFirst;
    var _str14$valueLast = _str14.valueLast;
    valueLast = _str14$valueLast === void 0 ? valueFirst : _str14$valueLast;
  } else if (isObjectParameter(str, 'str, value')) {
    var _str15 = str;
    str = _str15.str;
    valueFirst = _str15.value;
    var _str15$valueLast = _str15.valueLast;
    valueLast = _str15$valueLast === void 0 ? valueFirst : _str15$valueLast;
  }

  if (!isString(str)) {
    throw new TypeError('excludeBothEnds args(array) is not string');
  }

  if (!isString(valueFirst)) {
    throw new TypeError('excludeBothEnds args(valueFirst) is not string');
  }

  if (!isString(valueLast)) {
    throw new TypeError('excludeBothEnds args(valueLast) is not string');
  }

  return _excludeBothEnds(str, valueFirst, valueLast);
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
    var _str16 = str;
    str = _str16.str;
    indexStart = _str16.indexStart;
    var _str16$indexEnd = _str16.indexEnd;
    indexEnd = _str16$indexEnd === void 0 ? indexStart : _str16$indexEnd;
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
  return _subIndex(str, index, index + length - 1); // same:
  //  return str.substring(index, index + length);
};

var subLength = function subLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;

  if (isObjectParameter(str, 'str, index', 'length')) {
    var _str17 = str;
    str = _str17.str;
    index = _str17.index;
    var _str17$length = _str17.length;
    length = _str17$length === void 0 ? str.length - index : _str17$length;
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
    var _str18 = str;
    str = _str18.str;
    var _str18$length = _str18.length;
    length = _str18$length === void 0 ? 1 : _str18$length;
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
    var _str19 = str;
    str = _str19.str;
    var _str19$length = _str19.length;
    length = _str19$length === void 0 ? 1 : _str19$length;
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
/**
 * deleteIndex
 */


var _deleteIndex = function _deleteIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;
  var startStr = str.slice(0, indexStart);
  var endStr = str.slice(indexEnd + 1, str.length);
  return startStr + endStr;
};

var deleteIndex = function deleteIndex(str, indexStart) {
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexStart;

  if (isObjectParameter(str, 'str, indexStart', 'indexEnd')) {
    var _str20 = str;
    str = _str20.str;
    indexStart = _str20.indexStart;
    var _str20$indexEnd = _str20.indexEnd;
    indexEnd = _str20$indexEnd === void 0 ? indexStart : _str20$indexEnd;
  }

  if (!isString(str)) {
    throw new TypeError('deleteIndex args(str) is not string');
  }

  if (!isInteger(indexStart)) {
    throw new TypeError('deleteIndex args(indexStart) is not integer');
  }

  if (!_inRange(indexStart, 0, str.length - 1)) {
    throw new RangeError('deleteIndex args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(indexEnd)) {
    throw new TypeError('deleteIndex args(indexEnd) is not integer');
  }

  if (!_inRange(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError('deleteIndex args(indexEnd) must be from indexStart to str.length - 1');
  }

  return _deleteIndex(str, indexStart, indexEnd);
};
/**
 * deleteLength
 */


var _deleteLength = function _deleteLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;
  return _deleteIndex(str, index, index + length - 1);
};

var deleteLength = function deleteLength(str, index) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : str.length - index;

  if (isObjectParameter(str, 'str, index', 'length')) {
    var _str21 = str;
    str = _str21.str;
    index = _str21.index;
    var _str21$length = _str21.length;
    length = _str21$length === void 0 ? str.length - index : _str21$length;
  }

  if (!isString(str)) {
    throw new TypeError('deleteLength args(str) is not string');
  }

  if (!isInteger(index)) {
    throw new TypeError('deleteLength args(indexStart) is not integer');
  }

  if (!_inRange(index, 0, str.length - 1)) {
    throw new RangeError('deleteLength args(indexStart) must be from 0 to str.length - 1');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  length = _min([length, str.length - index]);

  if (!_inRange(length, 0, str.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 0 to str.length - indexStart');
  }

  return _deleteLength(str, index, length);
};
/**
 * deleteFirst
 */


var _deleteFirst = function _deleteFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(str, 0, length);
};

var deleteFirst = function deleteFirst(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str22 = str;
    str = _str22.str;
    var _str22$length = _str22.length;
    length = _str22$length === void 0 ? 1 : _str22$length;
  }

  if (!isString(str)) {
    throw new TypeError('deleteFirst args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('deleteFirst args(length) must be from 0 to str.length');
  }

  return _deleteFirst(str, length);
};
/**
 * deleteLast
 */


var _deleteLast = function _deleteLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return _deleteLength(str, str.length - length, length);
};

var deleteLast = function deleteLast(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (isObjectParameter(str, 'str', 'length')) {
    var _str23 = str;
    str = _str23.str;
    var _str23$length = _str23.length;
    length = _str23$length === void 0 ? 1 : _str23$length;
  }

  if (!isString(str)) {
    throw new TypeError('deleteLast args(str) is not string');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLast args(length) is not integer');
  }

  if (!_inRange(length, 0, str.length)) {
    throw new RangeError('deleteLast args(length) must be from 0 to str.length');
  }

  return _deleteLast(str, length);
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
  _includeFirst: _includeFirst,
  _includeLast: _includeLast,
  _includeBothEnds: _includeBothEnds,
  _excludeFirst: _excludeFirst,
  _excludeLast: _excludeLast,
  _excludeBothEnds: _excludeBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  _deleteIndex: _deleteIndex,
  _deleteLength: _deleteLength,
  _deleteFirst: _deleteFirst,
  _deleteLast: _deleteLast,
  repeat: repeat,
  isLowerCase: isLowerCase,
  isUpperCase: isUpperCase,
  indexOfFirst: indexOfFirst,
  indexOfLast: indexOfLast,
  isFirst: isFirst,
  isLast: isLast,
  isBothEnds: isBothEnds,
  includeFirst: includeFirst,
  includeLast: includeLast,
  includeBothEnds: includeBothEnds,
  excludeFirst: excludeFirst,
  excludeLast: excludeLast,
  excludeBothEnds: excludeBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast,
  deleteIndex: deleteIndex,
  deleteLength: deleteLength,
  deleteFirst: deleteFirst,
  deleteLast: deleteLast
};
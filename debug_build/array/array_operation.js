"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var _require2 = require('../number/number.js'),
    _inRange = _require2._inRange;

var _require3 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = require('../array/array_common.js'),
    _isFirst = _require4._isFirst,
    _isLast = _require4._isLast;
/**
 * array.operation.insert
 */


var _insert = function _insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(values)));
  return array;
};

var insert = function insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(array, 'array, values, index')) {
    var _array = array;
    array = _array.array;
    values = _array.values;
    index = _array.index;
  }

  if (!isArray(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!isArray(values)) {
    throw new TypeError('insert args(values) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, values, index);
};
/**
 * array.operation.add
 */


var _add = function _add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(values)));
  return array;
};

var add = function add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if (isObjectParameter(array, 'array, values, index')) {
    var _array2 = array;
    array = _array2.array;
    values = _array2.values;
    index = _array2.index;
  }

  if (!isArray(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!isArray(values)) {
    throw new TypeError('add args(values) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from 0 to array.length - 1');
  }

  return _add(array, values, index);
};
/**
 * array.operation.deleteLength
 */


var _deleteLength = function _deleteLength(array, index, length) {
  array.splice(index, length);
  return array;
};

var deleteLength = function deleteLength(array, index, length) {
  if (isObjectParameter(array, 'array, index, length')) {
    var _array3 = array;
    array = _array3.array;
    index = _array3.index;
    length = _array3.length;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteLength args(array) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('deleteLength args(index) is not integer');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError('deleteLength args(index) must be from 0 to array.length - 1');
  }

  if (!_inRange(length, 1, array.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 1 to array.length - index');
  }

  return _deleteLength(array, index, length);
};
/**
 * array.operation.deleteIndex
 */


var _deleteIndex = function _deleteIndex(array, indexFirst) {
  var indexLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexFirst;
  array.splice(indexFirst, indexLast - indexFirst + 1);
  return array;
};

var deleteIndex = function deleteIndex(array, indexFirst) {
  var indexLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexFirst;

  if (isObjectParameter(array, 'array, indexFirst', 'indexLast')) {
    var _array4 = array;
    array = _array4.array;
    indexFirst = _array4.indexFirst;
    var _array4$indexLast = _array4.indexLast;
    indexLast = _array4$indexLast === void 0 ? indexFirst : _array4$indexLast;
  } else if (isObjectParameter(array, 'array, index')) {
    var _array5 = array;
    array = _array5.array;
    indexFirst = _array5.index;
    var _array5$indexLast = _array5.indexLast;
    indexLast = _array5$indexLast === void 0 ? indexFirst : _array5$indexLast;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteIndex args(array) is not array');
  }

  if (!isInteger(indexFirst)) {
    throw new TypeError('deleteIndex args(indexFirst) is not integer');
  }

  if (!isInteger(indexLast)) {
    throw new TypeError("deleteIndex args(indexLast) is not integer");
  }

  if (!_inRange(indexFirst, 0, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexFirst) must be from 0 to array.length - 1');
  }

  if (!_inRange(indexLast, indexFirst, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexLast) must be from indexFirst to array.length - 1');
  }

  return _deleteIndex(array, indexFirst, indexLast);
};
/**
 * array.operation.includeFirst
 */


var _includeFirst = function _includeFirst(array, value) {
  if (!_isFirst(array, value)) {
    _insert(array, value);
  }
};

var includeFirst = function includeFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array6 = array;
    array = _array6.array;
    value = _array6.value;
  }

  if (!isArray(array)) {
    throw new TypeError('includeFirst args(array) is not array');
  }

  return _includeFirst(array, value);
};
/**
 * array.operation.includeLast
 */


var _includeLast = function _includeLast(array, value) {
  if (!_isLast(array, value)) {
    _add(array, value);
  }
};

var includeLast = function includeLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array7 = array;
    array = _array7.array;
    value = _array7.value;
  }

  if (!isArray(array)) {
    throw new TypeError('includeLast args(array) is not array');
  }

  return _includeLast(array, value);
};
/**
 * array.operation.excludeFirst
 */


var _excludeFirst = function _excludeFirst(array, value) {
  if (_isFirst(array, value)) {
    _deleteLength(array, 0);
  }
};

var excludeFirst = function excludeFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array8 = array;
    array = _array8.array;
    value = _array8.value;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeFirst args(array) is not array');
  }

  return _excludeFirst(array, value);
};
/**
 * array.operation.excludeLast
 */


var _excludeLast = function _excludeLast(array, value) {
  if (_isLast(array, value)) {
    _deleteLength(array, array.length - 1);
  }
};

var excludeLast = function excludeLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array9 = array;
    array = _array9.array;
    value = _array9.value;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeLast args(array) is not array');
  }

  return _excludeLast(array, value);
};

module.exports = {
  _insert: _insert,
  _add: _add,
  _deleteLength: _deleteLength,
  _deleteIndex: _deleteIndex,
  _includeFirst: _includeFirst,
  _includeLast: _includeLast,
  _excludeFirst: _excludeFirst,
  _excludeLast: _excludeLast,
  insert: insert,
  add: add,
  deleteLength: deleteLength,
  deleteIndex: deleteIndex,
  includeFirst: includeFirst,
  includeLast: includeLast,
  excludeFirst: excludeFirst,
  excludeLast: excludeLast
};
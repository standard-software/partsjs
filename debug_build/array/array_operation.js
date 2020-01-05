"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    _isException = _require._isException;

var _require2 = require('../number/number.js'),
    _inRange = _require2._inRange;

var _require3 = require('../object/_inProperty.js'),
    _inProperty = _require3._inProperty;

var _require4 = require('../root/clone.js'),
    _clone = _require4._clone,
    _cloneDeep = _require4._cloneDeep;
/**
 * array.insert
 */


var _insert = function _insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(values)));
  return array;
};

var insert = function insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (_inProperty(array, 'array, values, index')) {
    var _array = array;
    array = _array.array;
    values = _array.values;
    index = _array.index;
  }

  if (!_isArray(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!_isArray(values)) {
    throw new TypeError('insert args(values) is not array');
  }

  if (!_isInteger(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, values, index);
};
/**
 * array.add
 */


var _add = function _add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(values)));
  return array;
};

var add = function add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if (_inProperty(array, 'array, values, index')) {
    var _array2 = array;
    array = _array2.array;
    values = _array2.values;
    index = _array2.index;
  }

  if (!_isArray(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!_isArray(values)) {
    throw new TypeError('add args(values) is not array');
  }

  if (!_isInteger(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from 0 to array.length - 1');
  }

  return _add(array, values, index);
};
/**
 * array.delete
 */


var _delete = function _delete(array, index) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  array.splice(index, deleteCount);
  return array;
};

var deleteLength = function deleteLength(array, index) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (_inProperty(array, 'array, index, length')) {
    var _array3 = array;
    array = _array3.array;
    index = _array3.index;
    deleteCount = _array3.length;
  }

  if (!_isArray(array)) {
    throw new TypeError('delete args(array) is not array');
  }

  if (!_isInteger(index)) {
    throw new TypeError('delete args(index) is not integer');
  }

  if (!_isInteger(deleteCount)) {
    throw new TypeError('delete args(deleteCount) is not integer');
  }

  if (!_inRange(index, 0, array.length - deleteCount)) {
    throw new RangeError('delete args(index) must be from 0 to array.length - args deleteCount');
  }

  if (deleteCount <= 0) {
    throw new RangeError('delete args(deleteCount) must be >= 1');
  }

  return _delete(array, index, deleteCount);
};

module.exports = {
  insert: insert,
  add: add,
  "delete": deleteLength
};
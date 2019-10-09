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
    _isException = _require._isException;

var _require2 = require('../object/_inProperty.js'),
    _inProperty = _require2._inProperty;
/**
 * array.equal
 */


var _equal = function _equal(value1, value2) {
  if (value1.length !== value2.length) {
    return false;
  }

  for (var i = 0, l = value1.length; i < l; i += 1) {
    if (_isArray(value1[i]) && _isArray(value2[i])) {
      if (_equal(value1[i], value2[i]) === false) {
        return false;
      }
    } else if (value1[i] !== value2[i]) {
      return false;
    }
  }

  return true;
};

var equal = function equal(value1, value2) {
  if (_inProperty(value1, 'value1,value2')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
  }

  if (!_isArray(value1)) {
    throw new TypeError('array.equal args(value) is not array');
  }

  if (!_isArray(value2)) {
    throw new TypeError('array.equal args(value2) is not array');
  }

  return _equal(value1, value2);
};
/**
 * array.clone
 */


var _clone = function _clone(sourceArray) {
  var result = []; // for (let [index, value] of sourceArray.entries()) {

  for (var i = 0, l = sourceArray.length; i < l; i += 1) {
    var value = sourceArray[i];
    result.push(value);
  }

  return result;
};

var clone = function clone(sourceArray) {
  if (!_isArray(sourceArray)) {
    throw new TypeError('array.clone args(sourceArray) is not array');
  }

  return _clone(sourceArray);
};

var _cloneDeep = function _cloneDeep(sourceArray) {
  var __cloneDeep = function __cloneDeep(sourceArray) {
    var result = []; // for (let [index, value] of sourceArray.entries()) {

    for (var i = 0, l = sourceArray.length; i < l; i += 1) {
      var value = sourceArray[i];

      if (_isArray(value)) {
        result.push(__cloneDeep(value));
      } else {
        result.push(value);
      }
    }

    return result;
  };

  return __cloneDeep(sourceArray);
};

var cloneDeep = function cloneDeep(sourceArray) {
  if (!_isArray(sourceArray)) {
    throw new TypeError('array.cloneDeep args(sourceArray) is not array');
  }

  return _cloneDeep(sourceArray);
};
/**
 * array.min max
 */


var _min = function _min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 1, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

var min = function min(array) {
  if (!_isArray(array)) {
    throw new TypeError('min args(array) is not array');
  }

  return _min(array);
};

var _max = function _max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 1, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError('_max args(array) element is not number');
    }

    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

var max = function max(array) {
  if (!_isArray(array)) {
    throw new TypeError('max args(array) is not array');
  }

  return _max(array);
};

module.exports = {
  _equal: _equal,
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  _min: _min,
  _max: _max,
  equal: equal,
  clone: clone,
  cloneDeep: cloneDeep,
  min: min,
  max: max
};
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

var _require2 = require('../number/number.js'),
    isEven = _require2.isEven;

var _require3 = require('../object/_inProperty.js'),
    _inProperty = _require3._inProperty;

var _require4 = require('../root/clone.js'),
    _clone = _require4._clone,
    _cloneDeep = _require4._cloneDeep;
/**
 * array.min max
 */


var _min = function _min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
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

  for (var i = 0, l = array.length; i < l; i += 1) {
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
/**
 * from
 */


var from = function from(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
};
/**
 * sum
 */


var _sum = function _sum(array) {
  var result = 0;

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])) {
      throw new TypeError('_min args(array) element is not number');
    }

    result += array[i];
  }

  return result;
};

var sum = function sum(array) {
  if (!_isArray(array)) {
    throw new TypeError('sum args(array) is not array');
  }

  return _sum(array);
};
/**
 * average
 */


var _average = function _average(array) {
  if (array.length === 0) {
    return null;
  }

  return _sum(array) / array.length;
};

var average = function average(array) {
  if (!_isArray(array)) {
    throw new TypeError('average args(array) is not array');
  }

  return _average(array);
};
/**
 * midian
 */


var _midian = function _midian(array) {
  var sortedArray = _cloneDeep(array);

  sortedArray.sort(function (a, b) {
    return a - b;
  });

  if (isEven(sortedArray.length)) {
    // Even number length
    var centerIndex = sortedArray.length / 2;
    return (sortedArray[centerIndex - 1] + sortedArray[centerIndex]) / 2;
  } else {
    // Odd number length
    return sortedArray[(sortedArray.length - 1) / 2];
  }
};

var midian = function midian(array) {
  if (!_isArray(array)) {
    throw new TypeError('midian args(array) is not array');
  }

  return _midian(array);
};

module.exports = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _midian: _midian,
  // _mode,
  from: from,
  min: min,
  max: max,
  sum: sum,
  average: average,
  midian: midian // mode,

};
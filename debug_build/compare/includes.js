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
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException,
    _isMap = _require._isMap,
    _isWeakMap = _require._isWeakMap,
    _isSet = _require._isSet,
    _isWeakSet = _require._isWeakSet;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = require('../array/array_common.js'),
    _some = _require3._some,
    _all = _require3._all,
    _findFirstIndex = _require3._findFirstIndex;
/**
 * includes
 */


var _includes = function _includes(value, compare) {
  if (_isString(value)) {
    if (compare === '') {
      return false;
    }

    return value.includes(compare);
  } else if (_isArray(value)) {
    return value.includes(compare);
  }
};

var includes = function includes(value, compare) {
  if (isObjectParameter(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  if (_isString(value)) {
    if (!_isString(compare)) {
      throw new TypeError('includes args(compare) is not string');
    }
  } else if (_isArray(value)) {//
  } else {
    throw new TypeError('includes args(value) is not [string|array]');
  }

  return _includes(value, compare);
};
/**
 * includesSome
 */


var _includesSome = function _includesSome(value, compareArray) {
  return _some(compareArray, function (compare) {
    return _includes(value, compare);
  });
};

var includesSome = function includesSome(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('includesSome args(compareArray) is not array');
  }

  return _includesSome(value, compareArray);
};
/**
 * includesAll
 */


var _includesAll = function _includesAll(value, compareArray) {
  return _all(compareArray, function (compare) {
    return _includes(value, compare);
  });
};

var includesAll = function includesAll(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value3 = value;
    value = _value3.value;
    compareArray = _value3.compareArray;
  }

  if (!_isArray(compareArray)) {
    throw new TypeError('includesAll args(compareArray) is not array');
  }

  return _includesAll(value, compareArray);
};

module.exports = {
  _includes: _includes,
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  includes: includes,
  includesSome: includesSome,
  includesAll: includesAll
};
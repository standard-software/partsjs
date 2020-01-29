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
    isObjectType = _require.isObjectType,
    isArray = _require.isArray,
    isArrayType = _require.isArrayType,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = require('../array/array_common.js'),
    _some = _require3._some,
    _all = _require3._all,
    _findFirstIndex = _require3._findFirstIndex;

var _require4 = require('../compare/match.js'),
    _match = _require4._match;
/**
 * includes
 */


var _includes = function _includes(value, compare) {
  if (isString(value)) {
    if (compare === '') {
      return false;
    }

    if (isRegExp(compare)) {
      return _match(value, compare);
    }

    return value.indexOf(compare) !== -1;
  } else if (isArray(value)) {
    return value.indexOf(compare) !== -1;
  }
};

var includes = function includes(value, compare) {
  if (isObjectParameter(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  if (isString(value)) {
    if (!(isString(compare) || isRegExp(compare))) {
      throw new TypeError('includes args(compare) is not [string|RegExp]');
    }
  } else if (isArray(value)) {//
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
    return includes(value, compare);
  });
};

var includesSome = function includesSome(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('includesSome args(compareArray) is not array');
  }

  return _includesSome(value, compareArray);
};
/**
 * includesAll
 */


var _includesAll = function _includesAll(value, compareArray) {
  return _all(compareArray, function (compare) {
    return includes(value, compare);
  });
};

var includesAll = function includesAll(value, compareArray) {
  if (isObjectParameter(value, 'value,compareArray')) {
    var _value3 = value;
    value = _value3.value;
    compareArray = _value3.compareArray;
  }

  if (!isArray(compareArray)) {
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
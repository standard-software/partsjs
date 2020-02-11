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

var _require5 = require('../compare/includes.js'),
    _includes = _require5._includes,
    includes = _require5.includes;
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
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
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
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('includesAll args(compareArray) is not array');
  }

  return _includesAll(value, compareArray);
};

module.exports = {
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  includesSome: includesSome,
  includesAll: includesAll
};
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
    _all = _require3._all;

var _require4 = require('../compare/match.js'),
    _match = _require4._match;
/**
 * allMatch
 */


var _allMatch = function _allMatch(valueArray, compare) {
  return _all(valueArray, function (value) {
    return _match(value, compare);
  });
};

var allMatch = function allMatch(valueArray, compare) {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compare = _valueArray.compare;
  }

  if (!isArray(valueArray)) {
    throw new TypeError('allMatch args(valueArray) is not array');
  }

  return _allMatch(valueArray, compare);
};

module.exports = {
  _allMatch: _allMatch,
  allMatch: allMatch
};
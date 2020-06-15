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

var _require3 = require('../compare/matchAll.js'),
    _matchAll = _require3._matchAll;
/**
 * matchAllValue
 */


var _matchAllValue = function _matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if (_matchAll(value, compareArray)) {
    if (isFunction(match)) {
      return match(value);
    }

    return match;
  }

  if (isFunction(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

var matchAllValue = function matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if (isObjectParameter(value, 'value, compareArray, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if (isObjectParameter(compareArray, 'compareArray, match', 'unmatch')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
    match = _compareArray.match;
    var _compareArray$unmatch = _compareArray.unmatch;
    unmatch = _compareArray$unmatch === void 0 ? value : _compareArray$unmatch;
  } else if (isObjectParameter(match, 'match', 'unmatch')) {
    var _match = match;
    match = _match.match;
    var _match$unmatch = _match.unmatch;
    unmatch = _match$unmatch === void 0 ? value : _match$unmatch;
  } else if (isObjectParameter(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, match, unmatch);
};

module.exports = {
  _matchAllValue: _matchAllValue,
  matchAllValue: matchAllValue
};
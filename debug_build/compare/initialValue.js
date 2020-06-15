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

var _require3 = require('../compare/matchSomeValue.js'),
    _matchSomeValue = _require3._matchSomeValue;
/**
 * initialValue
 */


var _initialValue = function _initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];
  return _matchSomeValue(value, compareArray, match);
};

var initialValue = function initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];

  if (isObjectParameter(value, 'value, match', 'compareArray')) {
    var _value = value;
    value = _value.value;
    match = _value.match;
    var _value$compareArray = _value.compareArray;
    compareArray = _value$compareArray === void 0 ? [undefined] : _value$compareArray;
  } else if (isObjectParameter(match, 'match', 'compareArray')) {
    var _match = match;
    match = _match.match;
    var _match$compareArray = _match.compareArray;
    compareArray = _match$compareArray === void 0 ? [undefined] : _match$compareArray;
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!isArray(compareArray)) {
    throw new TypeError('initialValue args(compareArray) is not array');
  }

  return _initialValue(value, match, compareArray);
};

module.exports = {
  _initialValue: _initialValue,
  initialValue: initialValue
};
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
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isUndefinedArray = _require.isUndefinedArray,
    isNullArray = _require.isNullArray,
    isNaNStrictArray = _require.isNaNStrictArray,
    isBooleanArray = _require.isBooleanArray,
    isNumberArray = _require.isNumberArray,
    isIntegerArray = _require.isIntegerArray,
    isStringArray = _require.isStringArray,
    isFunctionArray = _require.isFunctionArray,
    isObjectArray = _require.isObjectArray,
    isArrayArray = _require.isArrayArray,
    isDateArray = _require.isDateArray,
    isRegExpArray = _require.isRegExpArray,
    isExceptionArray = _require.isExceptionArray;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = require('../array/NumberArray.js'),
    _NumberArray = _require3._NumberArray;
/**
 * arrayToIndexValueArray
 */


var _arrayToIndexValueArray = function _arrayToIndexValueArray(array) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }

  return result;
};

var arrayToIndexValueArray = function arrayToIndexValueArray(array) {
  if (isObjectParameter(array, 'array')) {
    var _array = array;
    array = _array.array;
  }

  if (!isArray(array)) {
    throw new TypeError('arrayToIndexValueArray args(array) is not array');
  }

  return _arrayToIndexValueArray(array);
};

var arrayEntries = arrayToIndexValueArray;
module.exports = {
  _arrayToIndexValueArray: _arrayToIndexValueArray,
  arrayToIndexValueArray: arrayToIndexValueArray,
  arrayEntries: arrayEntries
};
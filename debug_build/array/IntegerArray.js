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
 * IntegerArray
 */


var _IntegerArray = function _IntegerArray(start, end, increment) {
  return _NumberArray(start, end, increment);
};

var IntegerArray = function IntegerArray(start, end, increment) {
  if (isObjectParameter(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if (isObjectParameter(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if (isObjectParameter(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if (isObjectParameter(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!isInteger(start)) {
    throw new TypeError('IntegerArray args(start) is not number');
  }

  if (!isUndefined(end) && !isInteger(end)) {
    throw new TypeError('IntegerArray args(end) is not number');
  }

  if (!isUndefined(increment) && !isInteger(increment)) {
    throw new TypeError('IntegerArray args(increment) is not number');
  }

  return _IntegerArray(start, end, increment);
};

module.exports = {
  _IntegerArray: _IntegerArray,
  IntegerArray: IntegerArray
};
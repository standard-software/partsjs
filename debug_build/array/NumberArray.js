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
/**
 * NumberArray
 */


var _NumberArray = function _NumberArray(start, end, increment) {
  if (isUndefined(increment)) {
    if (isUndefined(end)) {
      increment = 1;
      end = increment * start - 1;
      start = 0;
    } else {
      if (start <= end) {
        increment = 1;
      } else {
        increment = -1;
      }
    }
  }

  if (increment === 0) {
    throw new RangeError('_NumberArray args(increment) is 0');
  }

  if (start <= end) {
    if (increment < 0) {
      throw new Error('_NumberArray args(increment) < 0');
    }
  } else {
    if (increment > 0) {
      throw new Error('_NumberArray args(increment) > 0');
    }
  }

  var result = [];

  if (start <= end) {
    for (var i = start, l = end; i <= l; i += increment) {
      result.push(i);
    }
  } else {
    for (var _i = start, _l = end; _i >= _l; _i += increment) {
      result.push(_i);
    }
  }

  return result;
};

var NumberArray = function NumberArray(start, end, increment) {
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

  if (!isNumber(start)) {
    throw new TypeError('NumberArray args(start) is not number');
  }

  if (!isUndefined(end) && !isNumber(end)) {
    throw new TypeError('NumberArray args(end) is not number');
  }

  if (!isUndefined(increment) && !isNumber(increment)) {
    throw new TypeError('NumberArray args(increment) is not number');
  }

  return _NumberArray(start, end, increment);
};

module.exports = {
  _NumberArray: _NumberArray,
  NumberArray: NumberArray
};
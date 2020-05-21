const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

/**
 * NumberArray
 */
const _NumberArray = (start, end, increment) => {

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

  const result = [];
  if (start <= end) {
    for (let i = start, l = end; i <= l; i += increment) {
      result.push(i);
    }
  } else {
    for (let i = start, l = end; i >= l; i += increment) {
      result.push(i);
    }
  }
  return result;
};

const NumberArray = (start, end, increment) => {

  if (isObjectParameter(start, 'count')) {
    ({ count: start } = start);
    end = undefined;
    increment = undefined;
  } else if (isObjectParameter(start, 'start, end', 'increment')) {
    ({ start, end, increment } = start);
  } else if (isObjectParameter(end, 'end', 'increment')) {
    ({ end, increment } = end);
  } else if (isObjectParameter(increment, 'increment')) {
    ({ increment } = increment);
  }

  if (!isNumber(start)) {
    throw new TypeError(
      'NumberArray args(start) is not number',
    );
  }
  if (!isUndefined(end) && !isNumber(end)) {
    throw new TypeError(
      'NumberArray args(end) is not number',
    );
  }
  if (!isUndefined(increment) && !isNumber(increment)) {
    throw new TypeError(
      'NumberArray args(increment) is not number',
    );
  }
  return _NumberArray(start, end, increment);
};

module.exports = {
  _NumberArray,

  NumberArray,

};


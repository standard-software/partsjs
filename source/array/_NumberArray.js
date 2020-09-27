import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} from '../type/type.js';

/**
 * NumberArray
 */
export const _NumberArray = (start, end, increment) => {

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
    for (let i = start, l = end; l <= i; i += increment) {
      result.push(i);
    }
  }
  return result;
};

export default {
  _NumberArray,
};


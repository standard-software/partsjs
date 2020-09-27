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

import {
  _NumberArray,
} from '../array/_NumberArray.js';

/**
 * IntegerArray
 */
export const _IntegerArray = (start, end, increment) => {
  return _NumberArray(start, end, increment);
};

export default {
  _IntegerArray,
};


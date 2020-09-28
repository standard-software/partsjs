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
  _max,
} from '../array/_max.js';

/**
 * array.max
 */
export const max = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'max args(array) is not array',
    );
  }
  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError(
      'max args(array) element is not number',
    );
  }
  return _max(array);
};

export default {
  max,
};

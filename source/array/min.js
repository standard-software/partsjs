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
  _min,
} from '../array/_min.js';

/**
 * array.min
 */
export const min = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'min args(array) is not array',
    );
  }
  if (array.length !== 0 && !isNumberArray(array)) {
    throw new TypeError(
      'min args(array) element is not number',
    );
  }
  return _min(array);
};

export default {
  min,
};

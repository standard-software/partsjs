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
  minDefaultFunc,
} from '../array/_min.js';

import { isObjectParameter } from '../object/isObjectParameter.js';

/**
 * array.min
 */
export const min = (
  array, func = minDefaultFunc, detail = false,
) => {
  if (isObjectParameter(array, 'array', 'func, detail')) {
    ({ array, func = minDefaultFunc, detail = false } = array);
  } else if (isObjectParameter(func, '', 'func, detail')) {
    ({ func = minDefaultFunc, detail = false } = func);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'min args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'min args(func) is not function',
    );
  }
  if (!isBoolean(detail)) {
    throw new TypeError(
      'min args(detail) is not boolean',
    );
  }

  return _min(array, func, detail);
};

export default {
  min,
};

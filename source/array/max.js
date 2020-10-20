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
import { isObjectParameter } from '../object/isObjectParameter.js';
import { __returnValueFunction } from '../common/__returnValueFunction.js';
import { _max } from '../array/_max.js';

/**
 * array.max
 */
export const max = (
  array, func = __returnValueFunction, detail = false,
) => {
  if (isObjectParameter(array, 'array', 'func, detail')) {
    ({ array, func = __returnValueFunction, detail = false } = array);
  } else if (isObjectParameter(func, '', 'func, detail')) {
    ({ func = __returnValueFunction, detail = false } = func);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'max args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'max args(func) is not function',
    );
  }
  if (!isBoolean(detail)) {
    throw new TypeError(
      'max args(detail) is not boolean',
    );
  }

  return _max(array, func, detail);
};

export default {
  max,
};

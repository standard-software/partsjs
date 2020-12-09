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
import { __returnFirstArgFunc } from '../common/__returnFirstArgFunc.js';
import { _group } from '../array/_group.js';

/**
 * group
 */
export const group = (array, func = __returnFirstArgFunc, detail = false) => {
  if (isObjectParameter(array, 'array', 'func, detail')) {
    ({ array, func = __returnFirstArgFunc, detail = false } = array);
  } else if (isObjectParameter(func, '', 'func, detail')) {
    ({ func = __returnFirstArgFunc, detail = false } = func);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'group args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'group args(func) is not function',
    );
  }
  if (!isBoolean(detail)) {
    throw new TypeError(
      'group args(detail) is not boolean',
    );
  }

  return _group(array, func, detail);
};

export default {
  group,
};

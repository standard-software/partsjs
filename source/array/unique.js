import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { __includes } from '../compare/__includes.js';
import { __returnFirstArgFunc } from '../common/__returnFirstArgFunc.js';
import { _unique } from '../array/_unique.js';

/**
 * uniqe
 */
export const unique = (array, func = __returnFirstArgFunc, detail = false) => {
  if (isObjectParameter(array, 'array', 'func, detail')) {
    ({ array, func = __returnFirstArgFunc, detail = false } = array);
  } else if (isObjectParameter(func, '', 'func, detail')) {
    ({ func = __returnFirstArgFunc, detail = false } = func);
  } else if (isObjectParameter(detail, 'detail')) {
    ({ detail } = detail);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'unique args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'unique args(func) is not function',
    );
  }
  if (!isBoolean(detail)) {
    throw new TypeError(
      'unique args(detail) is not boolean',
    );
  }

  return _unique(array, func, detail);
};

export default {
  unique,
};

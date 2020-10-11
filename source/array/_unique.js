import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  __includes,
} from '../compare/__includes.js';

import {
  __unique,
} from '../array/__unique.js';

/**
 * uniqe
 */
export const uniqueDefaultFunc = v => v;

export const _unique = (
  array, func = uniqueDefaultFunc, detail = false,
) => {
  if (func === uniqueDefaultFunc) {
    if (detail === false) {
      return __unique(array);
    }
  }

  const index = [];
  const result = [];
  array.forEach(v => {
    const funcResult = func(v);
    if (!__includes(index, funcResult)) {
      index.push(funcResult);
      result.push(v);
    }
  });
  func = undefined;
  if (detail) {
    return { index, result };
  }
  return result;
};

export default {
  _unique,
  uniqueDefaultFunc,
};

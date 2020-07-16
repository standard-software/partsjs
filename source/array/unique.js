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
  canUseSet,
} from '../syntax/syntax.js';

/**
 * uniqe
 */
export const _unique = (array) => {
  if (canUseSet() && array.length > 120) {
    return [...(new Set(array))];
  } else {
    const result = [];
    for (let i = 0, l = array.length; i < l; i += 1) {
      if (result.indexOf(array[i]) === -1) {
        result.push(array[i]);
      }
    }
    return result;
  }
  // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120
};

export const unique = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'unique args(array) is not array',
    );
  }
  return _unique(array);
};

export default {
  _unique,
  unique,
};

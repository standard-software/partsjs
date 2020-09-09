import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 * or
 */
export const _or = (value, compareArray) => {
  for (let i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }
  return false;
};

export const or = (value, compareArray) => {
  if (isObjectParameter(value, 'value, compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'or args(compareArray) is not array',
    );
  }

  return _or(value, compareArray);
};

export default {
  _or,
  or,
};

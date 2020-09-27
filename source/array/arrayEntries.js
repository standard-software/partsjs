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
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _NumberArray,
} from '../array/_NumberArray.js';

/**
 * arrayEntries
 */
export const _arrayEntries = (array) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }
  return result;
};

export const arrayEntries = (array) => {
  if (isObjectParameter(array, 'array')) {
    ({ array } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'arrayEntries args(array) is not array',
    );
  }

  return _arrayEntries(array);
};

export const arrayToIndexValueArray = arrayEntries;

export default {
  _arrayEntries,
  arrayEntries,
  arrayToIndexValueArray,
};

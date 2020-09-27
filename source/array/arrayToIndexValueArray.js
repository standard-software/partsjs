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
 * arrayToIndexValueArray
 */
export const _arrayToIndexValueArray = (array) => {
  const result = [];
  for (let i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }
  return result;
};

export const arrayToIndexValueArray = (array) => {
  if (isObjectParameter(array, 'array')) {
    ({ array } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'arrayToIndexValueArray args(array) is not array',
    );
  }

  return _arrayToIndexValueArray(array);
};

export const arrayEntries = arrayToIndexValueArray;

export default {
  _arrayToIndexValueArray,
  arrayToIndexValueArray,
  arrayEntries,
};

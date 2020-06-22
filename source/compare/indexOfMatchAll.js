import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _findFirstIndex,
} from '../array/array_common.js';

import {
  _matchAll,
} from '../compare/matchAll.js';

/**
 * indexOfMatchAll
 */
export const _indexOfMatchAll = (
  valueArray,
  compareArray,
) => {
  return _findFirstIndex(valueArray, value => {
    return _matchAll(value, compareArray);
  });
};

export const indexOfMatchAll = (
  valueArray,
  compareArray,
) => {
  if (isObjectParameter(valueArray, 'valueArray, compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'indexOfMatchAll args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'indexOfMatchAll args(compareArray) is not array',
    );
  }

  return _indexOfMatchAll(valueArray, compareArray);
};

export default {
  _indexOfMatchAll,
  indexOfMatchAll,
}

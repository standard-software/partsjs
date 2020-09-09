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

import {
  _all,
} from '../array/array_common.js';

import {
  _matchAll,
} from '../compare/matchAll.js';

/**
 * allMatchAll
 */
export const _allMatchAll = (
  valueArray,
  compareArray,
) => {
  return _all(valueArray, value => {
    return _matchAll(value, compareArray);
  });
};

export const allMatchAll = (
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
      'allMatchAll args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'allMatchAll args(compareArray) is not array',
    );
  }

  return _allMatchAll(valueArray, compareArray);
};

export default {
  _allMatchAll,
  allMatchAll,
};

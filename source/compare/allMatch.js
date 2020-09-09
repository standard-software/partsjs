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
  _match,
} from '../compare/match.js';

/**
 * allMatch
 */
export const _allMatch = (
  valueArray,
  compare,
) => {
  return _all(valueArray, value => {
    return _match(value, compare);
  });
};

export const allMatch = (
  valueArray,
  compare,
) => {
  if (isObjectParameter(valueArray, 'valueArray, compare')) {
    ({ valueArray, compare } = valueArray);
  } else if (isObjectParameter(compare, 'compare')) {
    ({ compare } = compare);
  }

  if (!isArray(valueArray)) {
    throw new TypeError(
      'allMatch args(valueArray) is not array',
    );
  }

  return _allMatch(valueArray, compare);
};

export default {
  _allMatch,
  allMatch,
};

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
  _match,
} from '../compare/match.js';

/**
 * indexOfMatch
 */
export const _indexOfMatch = (
  valueArray,
  compare,
) => {
  return _findFirstIndex(valueArray, value => {
    return _match(value, compare);
  });
};

export const indexOfMatch = (
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
      'indexOfMatch args(valueArray) is not array',
    );
  }

  return _indexOfMatch(valueArray, compare);
};

export default {
  _indexOfMatch,
  indexOfMatch,
};

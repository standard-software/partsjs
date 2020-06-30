import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
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
  _all,
} from '../array/array_common.js';

import {
  _match,
} from '../compare/match.js';

/**
 * matchAll
 */
export const _matchAll = (value, compareArray) => {
  return _all(compareArray, compare => {
    return _match(value, compare);
  });
};

export const matchAll = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchAll args(compareArray) is not array',
    );
  }

  return _matchAll(value, compareArray);
};

export default {
  _matchAll,
  matchAll,
};

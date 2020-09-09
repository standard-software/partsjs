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
  _some,
} from '../array/array_common.js';

import {
  _match,
} from '../compare/match.js';

/**
 * matchSome
 */
export const _matchSome = (value, compareArray) => {
  return _some(compareArray, compare => {
    return _match(value, compare);
  });
};

export const matchSome = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value, compareArray')) {
    ({ value, compareArray } = value);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchSome args(compareArray) is not array',
    );
  }

  return _matchSome(value, compareArray);
};

export default {
  _matchSome,
  matchSome,
};

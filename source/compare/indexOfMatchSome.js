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
  _findFirstIndex,
} from '../array/array_common.js';

import {
  _matchSome,
} from '../compare/matchSome.js';

/**
 * indexOfMatchSome
 */
export const _indexOfMatchSome = (
  valueArray,
  compareArray,
) => {
  return _findFirstIndex(valueArray, value => {
    return _matchSome(value, compareArray);
  });
};

export const indexOfMatchSome = (
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
      'indexOfMatchSome args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'indexOfMatchSome args(compareArray) is not array',
    );
  }

  return _indexOfMatchSome(valueArray, compareArray);
};

export default {
  _indexOfMatchSome,
  indexOfMatchSome,
};

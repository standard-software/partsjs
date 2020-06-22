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
  _all,
} from '../array/array_common.js';

import {
  _matchSome,
} from '../compare/matchSome.js';

/**
 * allMatchSome
 */
export const _allMatchSome = (
  valueArray,
  compareArray,
) => {
  return _all(valueArray, value => {
    return _matchSome(value, compareArray);
  });
};

export const allMatchSome = (
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
      'allMatchSome args(valueArray) is not array',
    );
  }
  if (!isArray(compareArray)) {
    throw new TypeError(
      'allMatchSome args(compareArray) is not array',
    );
  }

  return _allMatchSome(valueArray, compareArray);
};

export default {
  _allMatchSome,
  allMatchSome,
}

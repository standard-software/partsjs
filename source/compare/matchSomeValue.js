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
  _matchSome,
} from '../compare/matchSome.js';

/**
 * matchSomeValue
 */
export const _matchSomeValue = (
  value,
  compareArray,
  match,
  unmatch = value,
) => {
  if (_matchSome(value, compareArray)) {
    if (isFunction(match)) {
      return match(value);
    }
    return match;
  }
  if (isFunction(unmatch)) {
    return unmatch(value);
  }
  return unmatch;
};

export const matchSomeValue = (
  value,
  compareArray,
  match,
  unmatch = value,
) => {
  if (isObjectParameter(value, 'value, compareArray, match', 'unmatch')) {
    ({ value, compareArray, match, unmatch = value } = value);
  } else if (isObjectParameter(compareArray, 'compareArray, match', 'unmatch')) {
    ({ compareArray, match, unmatch = value } = compareArray);
  } else if (isObjectParameter(match, 'match', 'unmatch')) {
    ({ match, unmatch = value } = match);
  } else if (isObjectParameter(unmatch, 'unmatch')) {
    ({ unmatch } = unmatch);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'matchSomeValue args(compareArray) is not array',
    );
  }

  return _matchSomeValue(
    value,
    compareArray,
    match,
    unmatch,
  );
};

export default {
  _matchSomeValue,
  matchSomeValue,
};

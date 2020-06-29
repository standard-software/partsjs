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
  _match,
} from '../compare/match.js';

/**
 * matchValue
 */
export const _matchValue = (
  value,
  compare,
  match,
  unmatch = value,
) => {
  if (_match(value, compare)) {
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

export const matchValue = (
  value,
  compare,
  match,
  unmatch = value,
) => {
  if (isObjectParameter(value, 'value, compare, match', 'unmatch')) {
    ({ value, compare, match, unmatch = value } = value);
  } else if (isObjectParameter(compare, 'compare, match', 'unmatch')) {
    ({ compare, match, unmatch = value } = compare);
  } else if (isObjectParameter(match, 'match', 'unmatch')) {
    ({ match, unmatch = value } = match);
  } else if (isObjectParameter(unmatch, 'unmatch')) {
    ({ unmatch } = unmatch);
  }

  return _matchValue(
    value,
    compare,
    match,
    unmatch,
  );
};

export default {
  _matchValue,
  matchValue,
};

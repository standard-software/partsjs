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
  _matchSomeValue,
} from '../compare/matchSomeValue.js';

/**
 * initialValue
 */
export const _initialValue = (
  value,
  match,
  compareArray = [undefined],
) => {
  return _matchSomeValue(value, compareArray, match);
};

export const initialValue = (
  value,
  match,
  compareArray = [undefined],
) => {
  if (isObjectParameter(value, 'value, match', 'compareArray')) {
    ({ value, match, compareArray = [undefined] } = value);
  } else if (isObjectParameter(match, 'match', 'compareArray')) {
    ({ match, compareArray = [undefined] } = match);
  } else if (isObjectParameter(compareArray, 'compareArray')) {
    ({ compareArray } = compareArray);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'initialValue args(compareArray) is not array',
    );
  }

  return _initialValue(
    value,
    match,
    compareArray,
  );
};

export default {
  _initialValue,
  initialValue,
};

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
  _some, _all,
  _findFirstIndex,
} from '../array/array_common.js';

import {
  _match,
} from '../compare/match.js';

import {
  _includes, includes,
} from '../compare/includes.js';

/**
 * includesSome
 */
export const _includesSome = (value, compareArray) => {
  return _some(compareArray, compare => {
    return includes(value, compare);
  });
};

export const includesSome = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'includesSome args(compareArray) is not array',
    );
  }

  return _includesSome(value, compareArray);
};

/**
 * includesAll
 */
export const _includesAll = (value, compareArray) => {
  return _all(compareArray, compare => {
    return includes(value, compare);
  });
};

export const includesAll = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'includesAll args(compareArray) is not array',
    );
  }

  return _includesAll(value, compareArray);
};

export default {
  _includesSome,
  _includesAll,

  includesSome,
  includesAll,

}

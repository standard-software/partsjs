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
  _match,
} from '../compare/match.js';

import {
  __includes,
} from '../compare/__includes.js';

/**
 * includes
 */
export const _includes = (value, compare) => {
  if (isString(value)) {
    if (compare === '') {
      return false;
    }
    if (isRegExp(compare)) {
      return _match(value, compare);
    }
    return __includes(value, compare);
  } else if (isArray(value)) {
    return __includes(value, compare);
  }
};

export const includes = (
  value,
  compare,
) => {
  if (isObjectParameter(value, 'value, compare')) {
    ({ value, compare } = value);
  }

  if (isString(value)) {
    if (!(isString(compare) || isRegExp(compare))) {
      throw new TypeError(
        'includes args(compare) is not [string|RegExp]',
      );
    }
  } else if (isArray(value)) {
    //
  } else {
    throw new TypeError(
      'includes args(value) is not [string|array]',
    );
  }

  return _includes(value, compare);
};

export default {
  _includes,
  includes,
};

/* eslint-disable no-invalid-this */

import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isStringArray,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 * Enum
 */
export const _Enum = function(values, useIndex = false) {
  if (!(this instanceof _Enum)) {
    return new _Enum(values, useIndex);
  }

  if (useIndex === false) {
    for (let i = 0, l = values.length; i < l; i += 1) {
      this[values[i]] = values[i];
    }
  } else {
    for (let i = 0, l = values.length; i < l; i += 1) {
      this[values[i]] = i;
    }
  }
};

export const Enum = function(values, useIndex = false) {
  if (isObjectParameter(values, 'values', 'useIndex')) {
    ({ values, useIndex = false } = values);
  } else if (isObjectParameter(useIndex, 'useIndex')) {
    ({ useIndex } = useIndex);
  }

  if (!isStringArray(values)) {
    throw new TypeError(
      'Enum args(values) is not string array',
    );
  }
  if (!isBoolean(useIndex)) {
    throw new TypeError(
      'Enum args(useIndex) is not boolean',
    );
  }
  return _Enum(values, useIndex);
};

export default {
  _Enum,
  Enum,
};

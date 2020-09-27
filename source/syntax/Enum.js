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

import {
  _Enum,
} from '../syntax/_Enum.js';

/**
 * Enum
 */
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

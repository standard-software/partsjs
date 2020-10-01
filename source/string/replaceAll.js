import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _replaceAll,
} from '../string/_replaceAll.js';

/**
 * replaceAll
 */
export const replaceAll = (str, before, after) => {
  if (isObjectParameter(str, 'str, before, after')) {
    ({ str, before, after } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'replaceAll args(str) is not string',
    );
  }
  if (!isString(before)) {
    throw new TypeError(
      'replaceAll args(before) is not string',
    );
  }
  if (!isString(after)) {
    throw new TypeError(
      'replaceAll args(after) is not string',
    );
  }

  return _replaceAll(str, before, after);
};

export default {
  replaceAll,
};

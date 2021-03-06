import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import { isObjectParameter } from '../object/isObjectParameter.js';
import { _replaceAll } from '../string/_replaceAll.js';

/**
 * replaceAll
 */
export const replaceAll = (str, before, after) => {
  if (isObjectParameter(str, 'str, before, after')) {
    ({ str, before, after } = str);
  } else if (isObjectParameter(before, 'before, after')) {
    ({ before, after } = before);
  } else if (isObjectParameter(after, 'after')) {
    ({ after } = after);
  }

  if (!isString(str)) {
    throw new TypeError(
      `replaceAll args(str:${str}) is not string`,
    );
  }
  if (str === '') {
    throw new TypeError(
      `replaceAll args(str) is empty string`,
    );
  }
  if (!isString(before)) {
    throw new TypeError(
      `replaceAll args(before:${before}) is not string`,
    );
  }
  if (before === '') {
    throw new TypeError(
      `replaceAll args(before) is empty string`,
    );
  }
  if (!isString(after)) {
    throw new TypeError(
      `replaceAll args(after:${after}) is not string`,
    );
  }

  return _replaceAll(str, before, after);
};

export default {
  replaceAll,
};

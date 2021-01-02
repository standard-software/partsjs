import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import { isObjectParameter } from '../object/isObjectParameter.js';
import { __includes } from '../compare/__includes.js';
import { _replaceAllRepeat } from '../string/_replaceAllRepeat.js';

/**
 * replaceAllRepeat
 */
export const replaceAllRepeat = (str, before, after) => {
  if (isObjectParameter(str, 'str, before, after')) {
    ({ str, before, after } = str);
  } else if (isObjectParameter(before, 'before, after')) {
    ({ before, after } = before);
  } else if (isObjectParameter(after, 'after')) {
    ({ after } = after);
  }

  if (!isString(str)) {
    throw new TypeError(
      `replaceAllRepeat args(str:${str}) is not string`,
    );
  }
  if (str === '') {
    throw new TypeError(
      'replaceAllRepeat args(str) is empty string',
    );
  }
  if (!isString(before)) {
    throw new TypeError(
      `replaceAllRepeat args(before:${before}) is not string`,
    );
  }
  if (before === '') {
    throw new TypeError(
      'replaceAllRepeat args(before) is empty string',
    );
  }
  if (!isString(after)) {
    throw new TypeError(
      `replaceAllRepeat args(after:${after}) is not string`,
    );
  }
  if (__includes(after, before)) {
    throw new TypeError(
      'replaceAllRepeat args(before) is includes args(after)',
    );
  }

  return _replaceAllRepeat(str, before, after);
};

export default {
  replaceAllRepeat,
};

import { isObjectParameter } from '../object/isObjectParameter.js';
import { isString, isInteger } from '../type/isType.js';
import { _paddingFirst } from '../string/_paddingFirst.js';

/**
 * paddingFirst
 */
export const paddingFirst = (str, length, fill) => {
  if (isObjectParameter(str, 'str, length, fill')) {
    ({ str, length, fill } = str);
  } else if (isObjectParameter(length, 'length, fill')) {
    ({ length, fill } = length);
  } else if (isObjectParameter(fill, 'fill')) {
    ({ fill } = fill);
  }

  if (!isString(str)) {
    throw new TypeError(
      'paddingFirst args(str) is not string',
    );
  }
  if (!(isInteger(length) && 1 <= length)) {
    throw new TypeError(
      'paddingFirst args(length) is not integer >= 1',
    );
  }
  if (!isString(fill)) {
    throw new TypeError(
      'paddingFirst args(fill) is not string',
    );
  }

  return _paddingFirst(str, length, fill);
};

export default {
  paddingFirst,
};

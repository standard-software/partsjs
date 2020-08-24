import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedAll,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 * assert
 */
export const _assert = (value, message = '') => {
  if (value === false) {
    throw new Error(
      'assert error'
      + ` value:${value}`
      + (message === '' ? '' : ` message:${message}`),
    );
  }
};

export const assert = (value, message = '') => {
  if (isObjectParameter(value, 'value', 'message')) {
    ({ value, message = '' } = value);
  } else if (isObjectParameter(message, 'message')) {
    ({ message } = message);
  }

  if (!isBoolean(value)) {
    throw new TypeError(
      'assert args(value) is not boolean.'
      + ` value:${value}`
      + (message === '' ? '' : ` message:${message}`),
    );
  }
  if (!isString(message)) {
    throw new TypeError(
      'assert args(message) is not string.'
      + ` value:${value}`
      + (message === '' ? '' : ` message:${message}`),
    );
  }

  return _assert(value, message);
};

export default {
  _assert,
  assert,
};

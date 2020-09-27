import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  __loop,
} from '../syntax/__loop.js';

import {
  _IntegerArray,
} from '../array/_IntegerArray.js';

/**
 * loop
 */
export const _loop = (start, end, increment) => {
  return __loop(_IntegerArray(start, end, increment));
};

export default {
  loop,
};

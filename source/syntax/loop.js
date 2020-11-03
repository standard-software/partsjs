import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import { isObjectParameter } from '../object/isObjectParameter.js';
import { _IntegerArray } from '../array/_IntegerArray.js';
import { _objectEntries } from '../object/_objectEntries.js';
import { __loop } from '../syntax/__loop.js';

/**
 * loop
 */
export const loop = (start, end, increment) => {

  if (isObjectParameter(start, 'count')) {
    ({ count: start } = start);
    end = undefined;
    increment = undefined;
  } else if (isObjectParameter(start, 'start, end', 'increment')) {
    ({ start, end, increment } = start);
  } else if (isObjectParameter(end, 'end', 'increment')) {
    ({ end, increment } = end);
  } else if (isObjectParameter(increment, 'increment')) {
    ({ increment } = increment);
  } else if (isObject(start)) {
    return __loop(_objectEntries(start));
  } else if (isArray(start)) {
    return __loop(start);
  }

  if (!isInteger(start)) {
    throw new TypeError(
      'loop args(start) is not number',
    );
  }
  if (!isUndefined(end) && !isInteger(end)) {
    throw new TypeError(
      'loop args(end) is not number',
    );
  }
  if (!isUndefined(increment) && !isInteger(increment)) {
    throw new TypeError(
      'loop args(increment) is not number',
    );
  }

  return __loop(_IntegerArray(start, end, increment));
};

export default {
  loop,
};

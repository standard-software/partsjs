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
  _IntegerArray,
} from '../array/IntegerArray.js';

import {
  objectEntries,
} from '../object/objectEntries.js';

/**
 * loop
 */
export const _loopBase = (loopArray) => {
  return (func) => {
    if (!isFunction(func)) {
      throw new TypeError('loop()(func) func is not function');
    }
    for (let i = 0, l = loopArray.length; i < l; i += 1) {
      const element = loopArray[i];
      const index = i;
      const array = loopArray;
      const loopFirst = i === 0;
      const loopLast = i === loopArray.length - 1;
      const result = func(element, index, array, loopFirst, loopLast);
      if (!isUndefined(result) && result.break === true) {
        return result;
      }
    }
    return {};
  };
};

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
    return _loopBase(objectEntries(start));
  } else if (isArray(start)) {
    return _loopBase(start);
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

  return _loopBase(_IntegerArray(start, end, increment));
};

export default {
  loop,
};

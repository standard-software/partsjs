import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  _IntegerArray,
} from '../array/_IntegerArray.js';

/**
 * loop
 */
export const __loop = (loopArray) => {
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

export default {
  __loop,
};

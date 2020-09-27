import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _NumberArray,
} from '../array/_NumberArray.js';

/**
 * NumberArray
 */
export const NumberArray = (start, end, increment) => {

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
  }

  if (!isNumber(start)) {
    throw new TypeError(
      'NumberArray args(start) is not number',
    );
  }
  if (!isUndefined(end) && !isNumber(end)) {
    throw new TypeError(
      'NumberArray args(end) is not number',
    );
  }
  if (!isUndefined(increment) && !isNumber(increment)) {
    throw new TypeError(
      'NumberArray args(increment) is not number',
    );
  }
  return _NumberArray(start, end, increment);
};

export default {
  NumberArray,
};


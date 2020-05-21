const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _NumberArray,
} = require('../array/NumberArray.js');

/**
 * IntegerArray
 */
const _IntegerArray = (start, end, increment) => {
  return _NumberArray(start, end, increment);
};

const IntegerArray = (start, end, increment) => {

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

  if (!isInteger(start)) {
    throw new TypeError(
      'IntegerArray args(start) is not number',
    );
  }
  if (!isUndefined(end) && !isInteger(end)) {
    throw new TypeError(
      'IntegerArray args(end) is not number',
    );
  }
  if (!isUndefined(increment) && !isInteger(increment)) {
    throw new TypeError(
      'IntegerArray args(increment) is not number',
    );
  }
  return _IntegerArray(start, end, increment);
};

module.exports = {
  _IntegerArray,

  IntegerArray,

};


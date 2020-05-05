const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

/**
 * repeat
 */
const _repeat = (
  value,
  count,
) => {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += value;
  }
  return result;
};

const repeat = (
  value,
  count,
) => {
  if (isObjectParameter(value, 'value, count')) {
    ({ value, count } = value);
  }

  if (!isString(value)) {
    throw new TypeError(
      'repeat args(value) is not string',
    );
  }
  if (!isInteger(count)) {
    throw new TypeError(
      'repeat args(count) is not integer',
    );
  }

  return _repeat(value, count);
};

/**
 * isLowerCase
 */
const _isLowerCase = (
  value,
) => {
  return value.toLowerCase() === value;
};

const isLowerCase = (
  value,
) => {
  if (!isString(value)) {
    throw new TypeError(
      'isLowerCase args(value) is not string',
    );
  }

  return _isLowerCase(value);
};

/**
 * isUpperCase
 */
const _isUpperCase = (
  value,
) => {
  return value.toUpperCase() === value;
};

const isUpperCase = (
  value,
) => {
  if (!isString(value)) {
    throw new TypeError(
      'isUpperCase args(value) is not string',
    );
  }

  return _isUpperCase(value);
};

module.exports = {
  _repeat,
  _isLowerCase, _isUpperCase,

  repeat,
  isLowerCase, isUpperCase,

};

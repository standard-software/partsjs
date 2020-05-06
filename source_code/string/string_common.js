const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _inRange,
} = require('../number/number.js');

const {
  _max,
} = require('../array/array.js');

/**
 * repeat
 */
const _repeat = (
  str,
  count,
) => {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += str;
  }
  return result;
};

const repeat = (
  str,
  count,
) => {
  if (isObjectParameter(str, 'str, count')) {
    ({ str, count } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'repeat args(str) is not string',
    );
  }
  if (!isInteger(count)) {
    throw new TypeError(
      'repeat args(count) is not integer',
    );
  }

  return _repeat(str, count);
};

/**
 * isLowerCase
 */
const _isLowerCase = (
  str,
) => {
  return str.toLowerCase() === str;
};

const isLowerCase = (
  str,
) => {
  if (!isString(str)) {
    throw new TypeError(
      'isLowerCase args(str) is not string',
    );
  }

  return _isLowerCase(str);
};

/**
 * isUpperCase
 */
const _isUpperCase = (
  str,
) => {
  return str.toUpperCase() === str;
};

const isUpperCase = (
  str,
) => {
  if (!isString(str)) {
    throw new TypeError(
      'isUpperCase args(str) is not string',
    );
  }

  return _isUpperCase(str);
};

/**
 * indexOfFirst
 */
const _indexOfFirst = (str, search, startIndex) => {
  if (search === '') {
    return -1;
  }
  return str.indexOf(search, startIndex);
};

const indexOfFirst = (str, search, startIndex = 0) => {
  if (isObjectParameter(str, 'str, search', 'startIndex')) {
    ({ str, search, startIndex = 0 } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'indexOfFirst args(str) is not string',
    );
  }
  if (!isString(search)) {
    throw new TypeError(
      'indexOfFirst args(search) is not string',
    );
  }
  if (!isInteger(startIndex)) {
    throw new TypeError(
      'indexOfFirst args(startIndex) is not integer',
    );
  }
  if (!_inRange(startIndex, 0, _max([0, str.length - 1]))) {
    throw new RangeError(
      'indexOfFirst args(startIndex) must be from 0 to str.length - 1',
    );
  }

  return _indexOfFirst(str, search, startIndex);
};

/**
 * indexOfLast
 */
const _indexOfLast = (
  str, search, startIndex = _max([0, str.length - 1]),
) => {
  if (search === '') {
    return -1;
  }
  return str.lastIndexOf(search, startIndex);
};

const indexOfLast = (
  str, search, startIndex = _max([0, str.length - 1]),
) => {
  if (isObjectParameter(str, 'str, search', 'startIndex')) {
    ({
      str, search, startIndex = _max([0, str.length - 1]),
    } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'indexOfLast args(str) is not string',
    );
  }
  if (!isString(search)) {
    throw new TypeError(
      'indexOfLast args(search) is not string',
    );
  }
  if (!isInteger(startIndex)) {
    throw new TypeError(
      'indexOfLast args(startIndex) is not integer',
    );
  }
  if (!_inRange(startIndex, 0, _max([0, str.length - 1]))) {
    throw new RangeError(
      'indexOfLast args(startIndex) must be from 0 to str.length - 1',
    );
  }

  return _indexOfLast(str, search, startIndex);
};

module.exports = {
  _repeat,
  _isLowerCase, _isUpperCase,
  _indexOfFirst, _indexOfLast,

  repeat,
  isLowerCase, isUpperCase,
  indexOfFirst, indexOfLast,

};

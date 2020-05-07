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
  _min, _max,
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
const _indexOfFirst = (str, search, indexStart) => {
  if (search === '') {
    return -1;
  }
  return str.indexOf(search, indexStart);
};

const indexOfFirst = (str, search, indexStart = 0) => {
  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    ({ str, search, indexStart = 0 } = str);
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
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'indexOfFirst args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError(
      'indexOfFirst args(indexStart) must be from 0 to str.length - 1',
    );
  }

  return _indexOfFirst(str, search, indexStart);
};

/**
 * indexOfLast
 */
const _indexOfLast = (
  str, search, indexStart = _max([0, str.length - 1]),
) => {
  if (search === '') {
    return -1;
  }
  return str.lastIndexOf(search, indexStart);
};

const indexOfLast = (
  str, search, indexStart = _max([0, str.length - 1]),
) => {
  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    ({
      str, search, indexStart = _max([0, str.length - 1]),
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
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'indexOfLast args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError(
      'indexOfLast args(indexStart) must be from 0 to str.length - 1',
    );
  }

  return _indexOfLast(str, search, indexStart);
};

/**
 * isFirst
 */
const _isFirst = (str, search) => {
  return _indexOfFirst(str, search) === 0;
};

const isFirst = (str, search) => {
  if (isObjectParameter(str, 'str, search')) {
    ({ str, search } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'isFirst args(str) is not string',
    );
  }
  if (!isString(search)) {
    throw new TypeError(
      'isFirst args(search) is not string',
    );
  }

  return _isFirst(str, search);
};

/**
 * isLast
 */
const _isLast = (str, search) => {
  return _indexOfLast(str, search) === str.length - search.length;
};

const isLast = (str, search) => {
  if (isObjectParameter(str, 'str, search')) {
    ({ str, search } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'isLast args(str) is not string',
    );
  }
  if (!isString(search)) {
    throw new TypeError(
      'isLast args(search) is not string',
    );
  }

  return _isLast(str, search);
};

/**
 * isBothEnds
 */
const _isBothEnds = (
  str,
  searchFirst,
  searchLast = searchFirst,
) => {
  if (str.length <= 1) {
    return false;
  }
  return _isFirst(str, searchFirst) && _isLast(str, searchLast);
};

const isBothEnds = (
  str,
  searchFirst,
  searchLast = searchFirst,
) => {
  if (isObjectParameter(str, 'str, searchFirst', 'searchLast')) {
    ({ str, searchFirst, searchLast = searchFirst } = str);
  } else if (isObjectParameter(str, 'str, search')) {
    ({ str, search: searchFirst } = str);
    searchLast = searchFirst;
  }

  if (!isString(str)) {
    throw new TypeError(
      'isBothEnds args(str) is not string',
    );
  }
  if (!isString(searchFirst)) {
    throw new TypeError(
      'isBothEnds args(searchFirst) is not string',
    );
  }
  if (!isString(searchLast)) {
    throw new TypeError(
      'isBothEnds args(searchLast) is not string',
    );
  }

  return _isBothEnds(str, searchFirst, searchLast);
};

/**
 * subIndex
 */
const _subIndex = (
  str, indexStart, indexEnd = indexStart,
) => {
  return str.substring(indexStart, indexEnd + 1);
};

const subIndex = (
  str, indexStart, indexEnd = indexStart,
) => {
  if (isObjectParameter(str, 'str, indexStart', 'indexEnd')) {
    ({ str, indexStart, indexEnd = indexStart } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subIndex args(str) is not string',
    );
  }
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'subIndex args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, str.length - 1)) {
    throw new RangeError(
      'subIndex args(indexStart) must be from 0 to str.length - 1',
    );
  }
  if (!isInteger(indexEnd)) {
    throw new TypeError(
      'subIndex args(indexEnd) is not integer',
    );
  }
  if (!_inRange(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError(
      'subIndex args(indexEnd) must be from indexStart to str.length - 1',
    );
  }

  return _subIndex(str, indexStart, indexEnd);
};

/**
 * subLength
 */
const _subLength = (
  str, indexStart, length = str.length - indexStart,
) => {
  return str.substring(indexStart, indexStart + length);
};

const subLength = (
  str, indexStart, length = str.length - indexStart,
) => {
  if (isObjectParameter(str, 'str, indexStart', 'length')) {
    ({ str, indexStart, length = str.length - indexStart } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subLength args(str) is not string',
    );
  }
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'subLength args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, str.length - 1)) {
    throw new RangeError(
      'subLength args(indexStart) must be from 0 to str.length - 1',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subLength args(length) is not integer',
    );
  }
  length = _min([length, str.length - indexStart]);
  if (!_inRange(length, 1, str.length - indexStart)) {
    throw new RangeError(
      'subLength args(length) must be from 1 to str.length - indexStart',
    );
  }

  return _subLength(str, indexStart, length);
};

/**
 * subFirst
 */
const _subFirst = (str, length = 1) => {
  return _subLength(
    str, 0, length,
  );
};

const subFirst = (str, length = 1) => {
  if (isObjectParameter(str, 'str', 'length')) {
    ({ str, length = 1 } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subFirst args(str) is not string',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subFirst args(length) is not integer',
    );
  }
  if (!_inRange(length, 1, str.length)) {
    throw new RangeError(
      'subFirst args(length) must be from 1 to str.length',
    );
  }

  return _subFirst(str, length);
};

/**
 * subLast
 */
const _subLast = (str, length = 1) => {
  return _subLength(
    str, str.length - length, length,
  );
};

const subLast = (str, length = 1) => {
  if (isObjectParameter(str, 'str', 'length')) {
    ({ str, length = 1 } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subLast args(str) is not string',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subLast args(length) is not integer',
    );
  }
  if (!_inRange(length, 1, str.length)) {
    throw new RangeError(
      'subLast args(length) must be from 1 to str.length',
    );
  }

  return _subLast(str, length);
};

module.exports = {
  _repeat,
  _isLowerCase, _isUpperCase,
  _indexOfFirst, _indexOfLast,
  _isFirst, _isLast, _isBothEnds,
  _subIndex, _subLength,
  _subFirst, _subLast,

  repeat,
  isLowerCase, isUpperCase,
  indexOfFirst, indexOfLast,
  isFirst, isLast, isBothEnds,
  subIndex, subLength,
  subFirst, subLast,

};

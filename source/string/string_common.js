import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isStringArray,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _inRange,
} from '../number/number.js';

import {
  _min, _max,
  _findFirst,
} from '../array/array.js';

import {
  _indexOfFirst,
} from '../string/_indexOfFirst.js';

import {
  _indexOfLast,
} from '../string/_indexOfLast.js';

/**
 * repeat
 */
export const _repeat = (
  str,
  count,
) => {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += str;
  }
  return result;
};

export const repeat = (
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
export const _isLowerCase = (
  str,
) => {
  return str.toLowerCase() === str;
};

export const isLowerCase = (
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
export const _isUpperCase = (
  str,
) => {
  return str.toUpperCase() === str;
};

export const isUpperCase = (
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
 * isFirst
 */
export const _isFirst = (str, search) => {
  return _indexOfFirst(str, search) === 0;
};

export const isFirst = (str, search) => {
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
export const _isLast = (str, search) => {
  const result = _indexOfLast(str, search);
  if (result === -1) {
    return false;
  }
  return result === str.length - search.length;
};

export const isLast = (str, search) => {
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
export const _isBothEnds = (
  str,
  searchFirst,
  searchLast = searchFirst,
) => {
  if (str.length <= 1) {
    return false;
  }
  return _isFirst(str, searchFirst) && _isLast(str, searchLast);
};

export const isBothEnds = (
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
 * string.includeFirst
 */
export const _includeFirst = (str, value) => {
  if (!_isFirst(str, value)) {
    return value + str;
  }
  return str;
};

export const includeFirst = (str, value) => {
  if (isObjectParameter(str, 'str, value')) {
    ({ str, value } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'includeFirst args(str) is not string',
    );
  }
  if (!isString(value)) {
    throw new TypeError(
      'includeFirst args(value) is not string',
    );
  }

  return _includeFirst(str, value);
};

/**
 * string.includeLast
 */
export const _includeLast = (str, value) => {
  if (!_isLast(str, value)) {
    return str + value;
  }
  return str;
};

export const includeLast = (str, value) => {
  if (isObjectParameter(str, 'str, value')) {
    ({ str, value } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'includeLast args(str) is not string',
    );
  }
  if (!isString(value)) {
    throw new TypeError(
      'includeLast args(value) is not string',
    );
  }

  return _includeLast(str, value);
};

/**
 * string.includeBothEnds
 */
export const _includeBothEnds = (
  str, valueFirst, valueLast = valueFirst,
) => {
  if (!_isBothEnds(str, valueFirst, valueLast)) {
    return valueFirst + str + valueLast;
  }
  return str;
};

export const includeBothEnds = (
  str, valueFirst, valueLast = valueFirst,
) => {
  if (isObjectParameter(str, 'str, valueFirst', 'valueLast')) {
    ({ str, valueFirst, valueLast = valueFirst } = str);
  } else if (isObjectParameter(str, 'str, value')) {
    ({ str, value: valueFirst } = str);
    valueLast = valueFirst;
  }

  if (!isString(str)) {
    throw new TypeError(
      'includeBothEnds args(str) is not string',
    );
  }
  if (!isString(valueFirst)) {
    throw new TypeError(
      'includeBothEnds args(valueFirst) is not string',
    );
  }
  if (!isString(valueLast)) {
    throw new TypeError(
      'includeBothEnds args(valueLast) is not string',
    );
  }

  return _includeBothEnds(
    str,
    valueFirst,
    valueLast,
  );
};


/**
 * string.excludeFirst
 */
export const _excludeFirst = (str, value) => {
  if (_isFirst(str, value)) {
    return _deleteFirst(str, value.length);
  }
  return str;
};

export const excludeFirst = (str, value) => {
  if (isObjectParameter(str, 'str, value')) {
    ({ str, value } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'excludeFirst args(array) is not string',
    );
  }
  if (!isString(value)) {
    throw new TypeError(
      'excludeFirst args(value) is not string',
    );
  }

  return _excludeFirst(str, value);
};

/**
 * string.excludeLast
 */
export const _excludeLast = (str, value) => {
  if (_isLast(str, value)) {
    return _deleteLast(str, value.length);
  }
  return str;
};

export const excludeLast = (str, value) => {
  if (isObjectParameter(str, 'str, value')) {
    ({ str, value } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'excludeLast args(array) is not string',
    );
  }
  if (!isString(value)) {
    throw new TypeError(
      'excludeLast args(value) is not string',
    );
  }

  return _excludeLast(str, value);
};

/**
 * string.excludeBothEnds
 */
export const _excludeBothEnds = (
  str,
  valueFirst,
  valueLast = valueFirst,
) => {
  if (_isBothEnds(str, valueFirst, valueLast)) {
    str = deleteFirst(str, valueFirst.length);
    return deleteLast(str, _min([valueLast.length, str.length]));
  }
  return str;
};

export const excludeBothEnds = (
  str,
  valueFirst,
  valueLast = valueFirst,
) => {
  if (isObjectParameter(str, 'str, valueFirst', 'valueLast')) {
    ({ str, valueFirst, valueLast = valueFirst } = str);
  } else if (isObjectParameter(str, 'str, value')) {
    ({ str, value: valueFirst, valueLast = valueFirst } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'excludeBothEnds args(array) is not string',
    );
  }
  if (!isString(valueFirst)) {
    throw new TypeError(
      'excludeBothEnds args(valueFirst) is not string',
    );
  }
  if (!isString(valueLast)) {
    throw new TypeError(
      'excludeBothEnds args(valueLast) is not string',
    );
  }

  return _excludeBothEnds(
    str,
    valueFirst,
    valueLast,
  );
};

/**
 * string.trimFirst
 */
export const _trimFirst = (
  str,
  valueArray = [' ', '\r', '\n'],
) => {
  while (true) {
    const value = _findFirst(
      valueArray, value => _isFirst(str, value),
    );
    if (isUndefined(value)) {
      break;
    }
    str = _deleteFirst(str, value.length);
  }
  return str;
};

export const trimFirst = (str, valueArray = [' ', '\r', '\n']) => {
  if (isObjectParameter(str, 'str, valueArray')) {
    ({ str, valueArray = [' ', '\r', '\n'] } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'trimFirst args(str) is not string',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'trimFirst args(valueArray) is not array',
    );
  }
  if (valueArray.length > 0 && !isStringArray(valueArray)) {
    throw new TypeError(
      'trimFirst args(valueArray) is not string array',
    );
  }

  return _trimFirst(str, valueArray);
};

/**
 * string.trimLast
 */
export const _trimLast = (
  str,
  valueArray = [' ', '\r', '\n'],
) => {
  while (true) {
    const value = _findFirst(
      valueArray, value => _isLast(str, value),
    );
    if (isUndefined(value)) {
      break;
    }
    str = _deleteLast(str, value.length);
  }
  return str;
};

export const trimLast = (str, valueArray = [' ', '\r', '\n']) => {
  if (isObjectParameter(str, 'str, valueArray')) {
    ({ str, valueArray = [' ', '\r', '\n'] } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'trimLast args(string) is not string',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'trimLast args(valueArray) is not array',
    );
  }
  if (valueArray.length > 0 && !isStringArray(valueArray)) {
    throw new TypeError(
      'trimLast args(valueArray) element is not string array',
    );
  }

  return _trimLast(str, valueArray);
};

/**
 * string.trimBothEnds
 */
export const _trimBothEnds = (
  str,
  valueFirstArray = [' ', '\r', '\n'],
  valueLastArray = valueFirstArray,
) => {
  while (true) {
    const value = _findFirst(
      valueFirstArray, value => _isFirst(str, value),
    );
    if (isUndefined(value)) {
      break;
    }
    str = _deleteFirst(str, value.length);
  }
  while (true) {
    const value = _findFirst(
      valueLastArray, value => _isLast(str, value),
    );
    if (isUndefined(value)) {
      break;
    }
    str = _deleteLast(str, value.length);
  }
  return str;
};

export const trimBothEnds = (
  str,
  valueFirstArray = [' ', '\r', '\n'],
  valueLastArray = valueFirstArray,
) => {
  if (isObjectParameter(str, 'str, valueFirstArray', 'valueLastArray')) {
    ({ str, valueFirstArray, valueLastArray = valueFirstArray } = str);
  } else if (isObjectParameter(str, 'str, valueArray')) {
    ({ str, valueArray: valueFirstArray } = str);
    valueLastArray = valueFirstArray;
  }

  if (!isString(str)) {
    throw new TypeError(
      'trimBothEnds args(string) is not string',
    );
  }
  if (!isArray(valueFirstArray)) {
    throw new TypeError(
      'trimBothEnds args(valueFirstArray) is not array',
    );
  }
  if (valueFirstArray.length > 0 && !isStringArray(valueFirstArray)) {
    throw new TypeError(
      'trimBothEnds args(valueFirstArray) is not string array',
    );
  }
  if (!isArray(valueLastArray)) {
    throw new TypeError(
      'trimBothEnds args(valueLastArray) is not array',
    );
  }
  if (valueLastArray.length > 0 && !isStringArray(valueLastArray)) {
    throw new TypeError(
      'trimBothEnds args(valueLastArray) is not string array',
    );
  }

  return _trimBothEnds(str, valueFirstArray, valueLastArray);
};

/**
 * subIndex
 */
export const _subIndex = (
  str, indexStart, indexEnd = indexStart,
) => {
  return str.substring(indexStart, indexEnd + 1);
};

export const subIndex = (
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
export const _subLength = (
  str, index, length = str.length - index,
) => {
  return _subIndex(str, index, index + length - 1);
  // same:
  //  return str.substring(index, index + length);
};

export const subLength = (
  str, index, length = str.length - index,
) => {
  if (isObjectParameter(str, 'str, index', 'length')) {
    ({
      str, index, length = str.length - index,
    } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subLength args(str) is not string',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'subLength args(indexStart) is not integer',
    );
  }
  if (!_inRange(index, 0, str.length - 1)) {
    throw new RangeError(
      'subLength args(indexStart) must be from 0 to str.length - 1',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'subLength args(length) is not integer',
    );
  }
  length = _min([length, str.length - index]);
  if (!_inRange(length, 0, str.length - index)) {
    throw new RangeError(
      'subLength args(length) must be from 0 to str.length - indexStart',
    );
  }

  return _subLength(str, index, length);
};

/**
 * subFirst
 */
export const _subFirst = (str, length = 1) => {
  return _subLength(
    str, 0, length,
  );
};

export const subFirst = (str, length = 1) => {
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
  if (!_inRange(length, 0, str.length)) {
    throw new RangeError(
      'subFirst args(length) must be from 0 to str.length',
    );
  }

  return _subFirst(str, length);
};

/**
 * subLast
 */
export const _subLast = (str, length = 1) => {
  return _subLength(
    str, str.length - length, length,
  );
};

export const subLast = (str, length = 1) => {
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
  if (!_inRange(length, 0, str.length)) {
    throw new RangeError(
      'subLast args(length) must be from 0 to str.length',
    );
  }

  return _subLast(str, length);
};

/**
 * deleteIndex
 */
export const _deleteIndex = (
  str, indexStart, indexEnd = indexStart,
) => {
  const startStr = str.slice(0, indexStart);
  const endStr = str.slice(indexEnd + 1, str.length);
  return startStr + endStr;
};

export const deleteIndex = (
  str, indexStart, indexEnd = indexStart,
) => {
  if (isObjectParameter(str, 'str, indexStart', 'indexEnd')) {
    ({ str, indexStart, indexEnd = indexStart } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'deleteIndex args(str) is not string',
    );
  }
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'deleteIndex args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, str.length - 1)) {
    throw new RangeError(
      'deleteIndex args(indexStart) must be from 0 to str.length - 1',
    );
  }
  if (!isInteger(indexEnd)) {
    throw new TypeError(
      'deleteIndex args(indexEnd) is not integer',
    );
  }
  if (!_inRange(indexEnd, indexStart, str.length - 1)) {
    throw new RangeError(
      'deleteIndex args(indexEnd) must be from indexStart to str.length - 1',
    );
  }

  return _deleteIndex(str, indexStart, indexEnd);
};

/**
 * deleteLength
 */
export const _deleteLength = (
  str, index, length = str.length - index,
) => {
  return _deleteIndex(str, index, index + length - 1);
};

export const deleteLength = (
  str, index, length = str.length - index,
) => {
  if (isObjectParameter(str, 'str, index', 'length')) {
    ({ str, index, length = str.length - index } = str);
  } else if (isObjectParameter(index, 'index', 'length')) {
    ({ index, length = str.length - index } = index);
  } else if (isObjectParameter(length, 'length')) {
    ({ length } = length);
  }

  if (!isString(str)) {
    throw new TypeError(
      'deleteLength args(str) is not string',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'deleteLength args(indexStart) is not integer',
    );
  }
  if (!_inRange(index, 0, str.length - 1)) {
    throw new RangeError(
      'deleteLength args(indexStart) must be from 0 to str.length - 1',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'deleteLength args(length) is not integer',
    );
  }
  length = _min([length, str.length - index]);
  if (!_inRange(length, 0, str.length - index)) {
    throw new RangeError(
      'deleteLength args(length) must be from 0 to str.length - indexStart',
    );
  }

  return _deleteLength(str, index, length);
};

/**
 * deleteFirst
 */
export const _deleteFirst = (str, length = 1) => {
  return _deleteLength(
    str, 0, length,
  );
};

export const deleteFirst = (str, length = 1) => {
  if (isObjectParameter(str, 'str', 'length')) {
    ({ str, length = 1 } = str);
  } else if (isObjectParameter(length, 'length')) {
    ({ length } = length);
  }

  if (!isString(str)) {
    throw new TypeError(
      'deleteFirst args(str) is not string',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'deleteFirst args(length) is not integer',
    );
  }
  if (!_inRange(length, 0, str.length)) {
    throw new RangeError(
      'deleteFirst args(length) must be from 0 to str.length',
    );
  }

  return _deleteFirst(str, length);
};

/**
 * deleteLast
 */
export const _deleteLast = (str, length = 1) => {
  return _deleteLength(
    str, str.length - length, length,
  );
};

export const deleteLast = (str, length = 1) => {
  if (isObjectParameter(str, 'str', 'length')) {
    ({ str, length = 1 } = str);
  } else if (isObjectParameter(length, 'length')) {
    ({ length } = length);
  }

  if (!isString(str)) {
    throw new TypeError(
      'deleteLast args(str) is not string',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'deleteLast args(length) is not integer',
    );
  }
  if (!_inRange(length, 0, str.length)) {
    throw new RangeError(
      'deleteLast args(length) must be from 0 to str.length',
    );
  }

  return _deleteLast(str, length);
};

/**
 * string.insert
 */
export const _insert = (str, value, index = 0) => {
  str = _subFirst(str, index)
    + value + _subLast(str, str.length - index);
  return str;
};

export const insert = (str, value, index = 0) => {
  if (isObjectParameter(str, 'str, value', 'index')) {
    ({ str, value, index = 0 } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'insert args(str) is not string',
    );
  }
  if (!isString(value)) {
    throw new TypeError(
      'insert args(value) is not string',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'insert args(index) is not integer',
    );
  }
  if (!_inRange(index, 0, str.length)) {
    throw new RangeError(
      'insert args(index) must be from 0 to str.length',
    );
  }

  return _insert(str, value, index);
};

/**
 * string.add
 */
export const _add = (str, value, index = str.length - 1) => {
  str = _subFirst(str, index + 1)
    + value + _subLast(str, str.length - index - 1);
  return str;
};

export const add = (str, value, index = str.length - 1) => {
  if (isObjectParameter(str, 'str, value', 'index')) {
    ({ str, value, index = str.length - 1 } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'add args(str) is not string',
    );
  }
  if (!isString(value)) {
    throw new TypeError(
      'add args(value) is not string',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'add args(index) is not integer',
    );
  }
  if (!_inRange(index, -1, str.length - 1)) {
    throw new RangeError(
      'add args(index) must be from -1 to str.length - 1',
    );
  }

  return _add(str, value, index);
};

export default {
  _repeat,
  _isLowerCase, _isUpperCase,
  _isFirst, _isLast, _isBothEnds,
  _includeFirst, _includeLast, _includeBothEnds,
  _excludeFirst, _excludeLast, _excludeBothEnds,
  _trimFirst, _trimLast, _trimBothEnds,
  _subIndex, _subLength, _subFirst, _subLast,
  _deleteIndex, _deleteLength, _deleteFirst, _deleteLast,
  _insert, _add,

  repeat,
  isLowerCase, isUpperCase,
  isFirst, isLast, isBothEnds,
  includeFirst, includeLast, includeBothEnds,
  excludeFirst, excludeLast, excludeBothEnds,
  trimFirst, trimLast, trimBothEnds,
  subIndex, subLength, subFirst, subLast,
  deleteIndex, deleteLength, deleteFirst, deleteLast,
  insert, add,

};

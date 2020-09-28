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
} from '../type/isType.js';

import {
  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray,
  isObjectArray, isObjectNormalArray, isObjectFromNullArray,
  isObjectLikeArray, isModuleArray,
  isArrayArray, isArraySeriesArray,
  isDateArray, isRegExpArray,
  isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
  isEmptyObjectArray, isEmptyArrayArray,
} from '../type/isTypeArray.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _inRange,
} from '../number/number.js';

import {
  _max,
} from '../array/array.js';

import {
  _indexOfAnyLast,
} from '../string/_indexOfAnyLast.js';

/**
 * indexOfAnyLast
 */
export const indexOfAnyLast = (
  str, searchArray, indexStart = _max([0, str.length - 1]),
) => {
  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    ({ str, search, indexStart = _max([0, str.length - 1]) } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'indexOfAnyLast args(str) is not string',
    );
  }
  if (!isStringArray(searchArray)) {
    throw new TypeError(
      'indexOfAnyLast args(searchArray) is not string array',
    );
  }
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'indexOfAnyLast args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError(
      'indexOfAnyLast args(indexStart) must be from 0 to str.length - 1',
    );
  }

  return _indexOfAnyLast(str, searchArray, indexStart);
};

export default {
  indexOfAnyLast,
};

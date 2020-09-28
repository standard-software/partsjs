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
  _indexOfAnyFirst,
} from '../string/_indexOfAnyFirst.js';

/**
 * indexOfAnyFirst
 */
export const indexOfAnyFirst = (str, searchArray, indexStart = 0) => {
  if (isObjectParameter(str, 'str, search', 'indexStart')) {
    ({ str, search, indexStart = 0 } = str);
  }

  if (!isString(str)) {
    throw new TypeError(
      'indexOfAnyFirst args(str) is not string',
    );
  }
  if (!isStringArray(searchArray)) {
    throw new TypeError(
      'indexOfAnyFirst args(searchArray) is not string array',
    );
  }
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'indexOfAnyFirst args(indexStart) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, _max([0, str.length - 1]))) {
    throw new RangeError(
      'indexOfAnyFirst args(indexStart) must be from 0 to str.length - 1',
    );
  }

  return _indexOfAnyFirst(str, searchArray, indexStart);
};

export default {
  indexOfAnyFirst,
};

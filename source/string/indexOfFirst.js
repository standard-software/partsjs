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
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _inRange,
} from '../number/number.js';

import {
  _max,
} from '../array/array.js';

import {
  _indexOfFirst,
} from '../string/_indexOfFirst.js';

/**
 * indexOfFirst
 */
export const indexOfFirst = (str, search, indexStart = 0) => {
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

export default {
  indexOfFirst,
};

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
  isObjectLikeArray,
  isArraySeriesArray,
} from '../type/isTypeArray.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import { __returnValueFunction } from './__returnValueFunction.js';
import { _merge } from '../common/_merge.js';

/**
 * merge
 */
export const merge = (dataArray, func = __returnValueFunction, target) => {
  if (isObjectParameter(dataArray, 'dataArray, func', 'target')) {
    ({ dataArray, func = __returnValueFunction, target } = dataArray);
  } else if (isObjectParameter(func, 'func', 'target')) {
    ({ func = __returnValueFunction, target } = func);
  } else if (isObjectParameter(target, 'target')) {
    ({ target } = target);
  }

  if (!isArray(dataArray)) {
    throw new TypeError(
      'merge args(dataArray) is not array',
    );
  }
  if (!(
    dataArray.length === 0
    || isObjectLikeArray(dataArray)
    || isArraySeriesArray(dataArray)
  )) {
    throw new TypeError(
      'merge args(dataArray) element is not [ObjectLike|ArraySeries]',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'merge args(func) is not function',
    );
  }
  if (!(isUndefined(target) || isObjectLike(target) || isArraySeries(target))) {
    throw new TypeError(
      'merge args(target) is not [undefined|ObjectLike|ArraySeries]',
    );
  }

  return _merge(dataArray, func, target);
};

export default {
  merge,
};

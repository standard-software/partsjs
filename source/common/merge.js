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
  isObjectArray,
  isArrayArray,
} from '../type/isTypeArray.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import { __returnValueFunction } from './__returnValueFunction.js';
import { _merge } from '../common/_merge.js';

/**
 * merge
 */
export const merge = (source, targetArray, func) => {
  if (isObjectParameter(source, 'source, targetArray', 'func')) {
    ({ source, targetArray, func } = source);
  } else if (isObjectParameter(targetArray, 'targetArray', 'func')) {
    ({ targetArray, func } = targetArray);
  } else if (isObjectParameter(func, 'func')) {
    ({ func } = func);
  }

  if (!(isObject(source) || isArray(source))) {
    throw new TypeError(
      'merge args(source) is not [Object|Array]',
    );
  }
  if (!isArray(targetArray)) {
    throw new TypeError(
      'merge args(targetArray) is not array',
    );
  }
  if (!(
    targetArray.length === 0
    || isObjectArray(targetArray)
    || isArrayArray(targetArray)
  )) {
    throw new TypeError(
      'merge args(targetArray) element is not [Object|Array]',
    );
  }
  if (!(isUndefined(func) || isFunction(func))) {
    throw new TypeError(
      'merge args(func) is not function',
    );
  }

  return _merge(source, targetArray, func);
};

export default {
  merge,
};

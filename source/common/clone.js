import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike,
  isArray, isArraySeries,
  isDate, isRegExp,
  isException,
  isBooleanObject, isNumberObject, isStringObject,
  isSymbol,
  isMap, isWeakMap,
  isSet, isWeakSet,
} from '../type/type.js';

import {  _copyProperty } from '../object/object.js';
import {  isObjectParameter } from '../object/isObjectParameter.js';
import { _clone } from '../common/_clone.js';
import { __cloneFunc } from '../common/__cloneFunc.js';

/**
 * clone
 */
export const clone = (
  source,
  cloneFuncArray,
) => {
  if (isObjectParameter(source, 'source', 'cloneFuncArray')) {
    ({ source, cloneFuncArray = clone.func.defaultArray } = source);
  } else if (isObjectParameter(cloneFuncArray, 'cloneFuncArray')) {
    ({ cloneFuncArray } = cloneFuncArray);
  }

  if (!(isUndefined(cloneFuncArray) || isArray(cloneFuncArray))) {
    throw new TypeError(
      'clone args(cloneFuncArray) is not array',
    );
  }

  return _clone(source, cloneFuncArray);
};

clone.func = __cloneFunc;

export default { clone };


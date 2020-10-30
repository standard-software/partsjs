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

import { _hasOwn } from '../object/_hasOwn.js';
import { __clone } from '../common/__clone.js';
import { _cloneDeep } from '../common/_cloneDeep.js';
import { __cloneFunc } from '../common/__cloneFunc.js';

/**
 * clone
 */
export const _clone = (
  source, cloneFuncArray,
) => {
  if (isUndefined(cloneFuncArray)) {
    return __clone(source, false);
  }

  const _clone_ = (value) => {
    if (isUndefined(value)) {
      return undefined;
    }
    for (let i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      const result = cloneFuncArray[i](value);
      if (!isUndefined(result)) {
        return result;
      }
    }
    return value;
  };
  return _clone_(source);
};

_clone.func = __cloneFunc;

export default {
  _clone,
};


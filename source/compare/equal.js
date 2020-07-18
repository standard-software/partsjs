import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isObjectLikeArray,
  isArrayArray, isArrayTypeArray,
  isDateArray, isRegExpArray,
  isExceptionArray,
  isMapArray, isWeakMapArray,
  isSetArray, isWeakSetArray,

} from '../type/type.js';

import {
  _copyProperty,
  isObjectParameter,
} from '../object/object.js';

import {
  equalFunctionArrayDefault,
} from '../compare/equalFunction.js';

/**
 * equal
 */
export const _equal = (
  value1, value2, equalFunctionArray = equalFunctionArrayDefault,
) => {
  const __equal = (value1, value2) => {
    for (let i = 0, l = equalFunctionArray.length; i < l; i += 1) {
      const result = equalFunctionArray[i](value1, value2);
      if (!isUndefined(result)) {
        return result;
      }
    }
    return false;
  };
  return __equal(value1, value2);
};

export const equal = (
  value1, value2, equalFunctionArray = equalFunctionArrayDefault,
) => {
  if (isObjectParameter(value1, 'value1, value2', 'equalFunctionArray')) {
    ({
      value1, value2, equalFunctionArray = equalFunctionArrayDefault,
    } = value1);
  } else if (isObjectParameter(value2, 'value2', 'equalFunctionArray')) {
    ({ value2, equalFunctionArray = equalFunctionArrayDefault } = value2);
  } else if (isObjectParameter(equalFunctionArray, 'equalFunctionArray')) {
    ({ equalFunctionArray } = equalFunctionArray);
  }

  if (!isFunctionArray(equalFunctionArray)) {
    throw new TypeError(
      'equal args(equalFunctionArray) is not function array',
    );
  }

  return _equal(value1, value2, equalFunctionArray);
};

export default {
  _equal,
  equal,
};

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

  isUndefinedAll, isNullAll, isNaNStrictAll,
  isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
  isFunctionAll, isObjectAll, isObjectLikeAll,
  isArrayAll, isArrayTypeAll,
  isDateAll, isRegExpAll,
  isExceptionAll,
  isMapAll, isWeakMapAll,
  isSetAll, isWeakSetAll,

} from '../type/type.js';

import {
  _copyProperty,
  isObjectParameter,
} from '../object/object.js';

/**
 * equal
 */
export const _equal = (
  value1, value2, equalFuncArray = equal.func.defaultArray,
) => {
  const __equal = (value1, value2) => {
    for (let i = 0, l = equalFuncArray.length; i < l; i += 1) {
      const result = equalFuncArray[i](value1, value2);
      if (!isUndefined(result)) {
        return result;
      }
    }
    return false;
  };
  return __equal(value1, value2);
};

export const equal = (
  value1, value2, equalFuncArray = equal.func.defaultArray,
) => {
  if (isObjectParameter(value1, 'value1, value2', 'equalFuncArray')) {
    ({
      value1, value2, equalFuncArray = equal.func.defaultArray,
    } = value1);
  } else if (isObjectParameter(value2, 'value2', 'equalFuncArray')) {
    ({ value2, equalFuncArray = equal.func.defaultArray } = value2);
  } else if (isObjectParameter(equalFuncArray, 'equalFuncArray')) {
    ({ equalFuncArray } = equalFuncArray);
  }

  if (!isFunctionArray(equalFuncArray)) {
    throw new TypeError(
      'equal args(equalFuncArray) is not function array',
    );
  }

  return _equal(value1, value2, equalFuncArray);
};

/**
 * equal.func
 */
equal.func = {};

equal.func.value = (
  value1, value2,
) => {
  if (isNaNStrict(value1) && isNaNStrict(value2)) {
    return true;
  }
  return value1 === value2;
};

// function is no recursive call
equal.func.function = (
  value1, value2,
) => {
  if (!isFunctionAll(value1, value2)) {
    return;
  }
  return value1 === value2;
};

equal.func.object = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!(isObjectAll(value1, value2))) {
    return;
  }
  const value1Keys = Object.keys(value1);
  const value2Keys = Object.keys(value2);
  if (value1Keys.length !== value2Keys.length) {
    return false;
  }
  bufferWrite(value1, value2);
  for (let i = 0, l = value1Keys.length; i < l; i += 1) {
    const key = value1Keys[i];
    if (__equalDeep(value1[key], value2[key]) === false) {
      return false;
    }
  }
  return true;
};

equal.func.arrayType = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!(isArrayTypeAll(value1, value2))) {
    return;
  }
  if (value1.length !== value2.length) {
    return false;
  }
  bufferWrite(value1, value2);
  for (let i = 0, l = value1.length; i < l; i += 1) {
    if (__equalDeep(value1[i], value2[i]) === false) {
      return false;
    }
  }
  return true;
};

equal.func.date = (
  value1, value2,
) => {
  if (!isDateAll(value1, value2)) {
    return;
  }
  return value1.getTime() === value2.getTime();
};

equal.func.regExp = (
  value1, value2,
) => {
  if (!isRegExpAll(value1, value2)) {
    return;
  }
  return value1.source === value2.source;
};

equal.func.map = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isMapAll(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const [key, value] of value1.entries()) {
    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  }
  return true;
};

equal.func.weakMap = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isWeakMapAll(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const [key, value] of value1.entries()) {
    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  }
  return true;
};

equal.func.set = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isSetAll(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const v1item of value1) {
    let result = false;
    for (const v2item of value2) {
      if (__equalDeep(v1item, v2item) === true) {
        result = true;
      }
    }
    if (result === false) {
      return false;
    }
  }
  return true;
};

equal.func.weakSet = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isWeakSetAll(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const v1item of value1) {
    let result = false;
    for (const v2item of value2) {
      if (__equalDeep(v1item, v2item) === true) {
        result = true;
      }
    }
    if (result === false) {
      return false;
    }
  }
  return true;
};

equal.func.defaultArray = [
  equal.func.date,
  equal.func.regExp,
  equal.func.function,
  equal.func.map,
  equal.func.weakMap,
  equal.func.set,
  equal.func.weakSet,
  equal.func.arrayType,
  equal.func.object,
  equal.func.value,
];

export default {
  _equal,
  equal,
};

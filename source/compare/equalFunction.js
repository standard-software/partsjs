import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectLike,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,

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
 * equalFunction
 */
export const equalFunction = {};

equalFunction.equalValue = (
  value1, value2,
) => {
  if (isNaNStrict(value1) && isNaNStrict(value2)) {
    return true;
  }
  return value1 === value2;
};

// function is no recursive call
equalFunction.equalFunction = (
  value1, value2,
) => {
  if (!isFunctionAll(value1, value2)) {
    return;
  }
  return value1 === value2;
};

equalFunction.equalObject = (
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

equalFunction.equalArrayType = (
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

equalFunction.equalDate = (
  value1, value2,
) => {
  if (!isDateAll(value1, value2)) {
    return;
  }
  return value1.getTime() === value2.getTime();
};

equalFunction.equalRegExp = (
  value1, value2,
) => {
  if (!isRegExpAll(value1, value2)) {
    return;
  }
  return value1.source === value2.source;
};

equalFunction.equalMap = (
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

equalFunction.equalWeakMap = (
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

equalFunction.equalSet = (
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

equalFunction.equalWeakSet = (
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

export const equalFunctionArrayDefault = [
  equalFunction.equalDate,
  equalFunction.equalRegExp,
  equalFunction.equalFunction,
  equalFunction.equalMap,
  equalFunction.equalWeakMap,
  equalFunction.equalSet,
  equalFunction.equalWeakSet,
  equalFunction.equalArrayType,
  equalFunction.equalObject,
  equalFunction.equalValue,
];

export default {
  equalFunction,
  equalFunctionArrayDefault,
};

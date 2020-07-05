import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isBooleanObject, isNumberObject, isStringObject,
  isSymbol,
  isMap, isWeakMap,
  isSet, isWeakSet,
} from '../type/type.js';

import {
  _copyProperty,
} from '../object/object.js';

/**
 * cloneFunction
 */
export const cloneFunction = {};

// function is no clone
cloneFunction.cloneIgnoreFunction = (
  source,
) => {
  if (!isFunction(source)) {
    return undefined;
  }
  return source;
};

// support
//  user object and user arrayType
//  Just good usability
cloneFunction.cloneObject = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!(isObject(source))) {
    return undefined;
  }
  const cloneValue = isObjectFromNull(source)
    ? Object.create(null)
    : new source.constructor();
  bufferWrite(source, cloneValue);
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
};

cloneFunction.cloneArrayType = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!(isArrayType(source))) {
    return undefined;
  }

  const cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);
  for (let i = 0, l = source.length; i < l; i += 1) {
    cloneValue[i] = __cloneDeep(source[i]);
  }
  // // Code that does the same thing
  // // for in array key is string.
  // // legacy for loop is simple for array
  // for (const key in source) {
  //   if (source.hasOwnProperty(key)) {
  //     cloneValue[key] = __cloneDeep(source[key]);
  //   }
  // }
  return cloneValue;
};

// support
//  all object
//  but Math or JSON etc clone
//  Cloning unnecessary objects
cloneFunction.cloneObjectLike = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!isObjectLike(source)) {
    return undefined;
  }

  const cloneValue = isObjectFromNull(source)
    ? Object.create(null)
    : new source.constructor();
  bufferWrite(source, cloneValue);
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
};

cloneFunction.cloneDate = (
  source,
  bufferWrite = () => {},
) => {
  if (!isDate(source)) {
    return undefined;
  }
  const cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

cloneFunction.cloneRegExp = (
  source,
  bufferWrite = () => {},
) => {
  if (!isRegExp(source)) {
    return undefined;
  }
  const cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
};

// cloneMap
//  key not recursive call
//  value recursive call
cloneFunction.cloneMap = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!isMap(source)) {
    return undefined;
  }
  const cloneValue = new Map();
  bufferWrite(source, cloneValue);
  for (const [key, value] of source.entries()) {
    cloneValue.set(key, __cloneDeep(value));
  }
  return cloneValue;
};

cloneFunction.cloneIgnoreWeakMap = (
  source,
) => {
  if (!isWeakMap(source)) {
    return undefined;
  }
  return source;
};

// cloneSet
//  element not recursive call
//  same map key
cloneFunction.cloneSet = (
  source,
  bufferWrite = () => {},
) => {
  if (!isSet(source)) {
    return undefined;
  }
  const cloneValue = new Set();
  bufferWrite(source, cloneValue);
  for (const value of source) {
    cloneValue.add(value);
  }
  return cloneValue;
};

cloneFunction.cloneIgnoreWeakSet = (
  source,
) => {
  if (!isWeakSet(source)) {
    return undefined;
  }
  return source;
};

export const cloneFunctionArrayDefault = [
  cloneFunction.cloneDate,
  cloneFunction.cloneRegExp,
  cloneFunction.cloneIgnoreFunction,
  cloneFunction.cloneMap,
  cloneFunction.cloneIgnoreWeakMap,
  cloneFunction.cloneSet,
  cloneFunction.cloneIgnoreWeakSet,
  cloneFunction.cloneArrayType,
  cloneFunction.cloneObject,
];

export default {
  cloneFunction,
  cloneFunctionArrayDefault,
};


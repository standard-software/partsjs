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

import {
  _copyProperty,
} from '../object/object.js';

import { _hasOwn } from '../object/_hasOwn.js';
import { __clone } from '../common/__clone.js';
import { _cloneDeep } from '../common/_cloneDeep.js';

/**
 * clone.func
 */
export const __cloneFunc = {};

// function is no clone
__cloneFunc.ignoreFunction = (
  source,
) => {
  if (!isFunction(source)) {
    return undefined;
  }
  return source;
};

// support
//  user object and user arraySeries
//  Just good usability
__cloneFunc.object = (
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
    if (_hasOwn(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
};

__cloneFunc.arraySeries = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!(isArraySeries(source))) {
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
__cloneFunc.objectLike = (
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
    if (_hasOwn(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
};

__cloneFunc.date = (
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

__cloneFunc.regExp = (
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
__cloneFunc.map = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!isMap(source)) {
    return undefined;
  }
  const cloneValue = new Map();
  bufferWrite(source, cloneValue);

  const sourceEntries = [];
  source.forEach((value, key) => {
    sourceEntries.push([key, value]);
  });
  for (const [key, value] of sourceEntries) {
    cloneValue.set(key, __cloneDeep(value));
  }
  // IE11 no support map.keys map.entries
  return cloneValue;
};

__cloneFunc.ignoreWeakMap = (
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
__cloneFunc.set = (
  source,
  bufferWrite = () => {},
) => {
  if (!isSet(source)) {
    return undefined;
  }
  const cloneValue = new Set();
  bufferWrite(source, cloneValue);

  const sourceEntries = [];
  source.forEach((value, key) => {
    sourceEntries.push([key, value]);
  });
  for (const [key, value] of sourceEntries) {
    cloneValue.add(value);
  }
  // IE11 no support set.keys set.entries
  return cloneValue;
};

__cloneFunc.ignoreWeakSet = (
  source,
) => {
  if (!isWeakSet(source)) {
    return undefined;
  }
  return source;
};

__cloneFunc.DefaultArray = () => [
  __cloneFunc.date,
  __cloneFunc.regExp,
  __cloneFunc.ignoreFunction,
  __cloneFunc.map,
  __cloneFunc.ignoreWeakMap,
  __cloneFunc.set,
  __cloneFunc.ignoreWeakSet,
  __cloneFunc.arraySeries,
  __cloneFunc.object,
];

export default { __cloneFunc };

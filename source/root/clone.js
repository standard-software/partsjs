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

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _hasOwn,
} from '../object/_hasOwn.js';

/**
 * clone
 */
export const _clone = (
  source, cloneFuncArray = clone.func.defaultArray,
) => {
  const __clone = (value) => {
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
  return __clone(source);
};

export const clone = (
  source,
  cloneFuncArray = clone.func.defaultArray,
) => {
  if (isObjectParameter(source, 'source', 'cloneFuncArray')) {
    ({ source, cloneFuncArray = clone.func.defaultArray } = source);
  } else if (isObjectParameter(cloneFuncArray, 'cloneFuncArray')) {
    ({ cloneFuncArray } = cloneFuncArray);
  }

  if (!isArray(cloneFuncArray)) {
    throw new TypeError(
      'clone args(cloneFuncArray) is not array',
    );
  }

  return _clone(source, cloneFuncArray);
};

/**
 * clone.func
 */
clone.func = {};

// function is no clone
clone.func.ignoreFunction = (
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
clone.func.object = (
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

clone.func.arrayType = (
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
clone.func.objectLike = (
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

clone.func.date = (
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

clone.func.regExp = (
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
clone.func.map = (
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

clone.func.ignoreWeakMap = (
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
clone.func.set = (
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

clone.func.ignoreWeakSet = (
  source,
) => {
  if (!isWeakSet(source)) {
    return undefined;
  }
  return source;
};

clone.func.defaultArray = [
  clone.func.date,
  clone.func.regExp,
  clone.func.ignoreFunction,
  clone.func.map,
  clone.func.ignoreWeakMap,
  clone.func.set,
  clone.func.ignoreWeakSet,
  clone.func.arrayType,
  clone.func.object,
];

export default {
  _clone,
  clone,
};


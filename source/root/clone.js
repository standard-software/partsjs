import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
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

  const cloneValue = new source.constructor();
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
cloneFunction.cloneObjectType = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!isObjectType(source)) {
    return undefined;
  }

  const cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
};

// // support only simple object
// cloneFunction.cloneObject = (
//   source,
//   bufferWrite = () => {},
//   __cloneDeep = value => value,
// ) => {
//   if (!isObject(source)) {
//     return undefined;
//   }
//   const cloneValue = {};
//   bufferWrite(source, cloneValue);
//   for (let key in source) {
//     cloneValue[key] = __cloneDeep(source[key]);
//   }
//   return cloneValue;
// }

// // support only simple array
// cloneFunction.cloneArray = (
//   source,
//   bufferWrite = () => {},
//   __cloneDeep = value => value,
// ) => {
//   if (!isArray(source)) {
//     return undefined;
//   }
//   const cloneValue = [];
//   bufferWrite(source, cloneValue);
//   for (let i = 0, l = source.length; i < l; i += 1) {
//     const value = source[i];
//     cloneValue.push(__cloneDeep(value))
//   }
//   return cloneValue;
// }

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

/**
 * clone
 */
export const _clone = (source) => {
  const __clone = (value) => {
    if (isUndefined(value)) {
      return undefined;
    }
    for (let i = 0, l = _clone.functions.length; i < l; i += 1) {
      const result = _clone.functions[i](value);
      if (!isUndefined(result)) {
        return result;
      }
    }
    return value;
  };
  return __clone(source);
};
_clone.functions = [];

_clone.clear = () => {
  _clone.functions = [];
};

_clone.add = (func) => {
  _clone.functions.unshift(func);
};

_clone.reset = () => {
  _clone.clear();
  _clone.add(cloneFunction.cloneObject);
  _clone.add(cloneFunction.cloneArrayType);
  _clone.add(cloneFunction.cloneIgnoreWeakSet);
  _clone.add(cloneFunction.cloneSet);
  _clone.add(cloneFunction.cloneIgnoreWeakMap);
  _clone.add(cloneFunction.cloneMap);
  _clone.add(cloneFunction.cloneIgnoreFunction);
  _clone.add(cloneFunction.cloneRegExp);
  _clone.add(cloneFunction.cloneDate);
};
_clone.reset();

export const clone = (source) => {
  return _clone(source);
};

_copyProperty(_clone,
  'clear,reset,add,' +
  '',
  clone,
);

/**
 * cloneDeep
 */
export const _cloneDeep = (source) => {
  const CircularReferenceBuffer = {
    source: [],
    clone: [],
  };
  const __cloneDeep = (value) => {
    const index = CircularReferenceBuffer.source.indexOf(value);
    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }
    if (isUndefined(value)) {
      return undefined;
    }
    for (let i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      const result = _cloneDeep.functions[i](
        value,
        (source, clone) => {
          CircularReferenceBuffer.source.push(source);
          CircularReferenceBuffer.clone.push(clone);
        },
        __cloneDeep,
      );
      if (!isUndefined(result)) {
        return result;
      }
    }
    return value;
  };
  return __cloneDeep(source);
};

_cloneDeep.functions = [];

_cloneDeep.clear = (func) => {
  _cloneDeep.functions = [];
};

_cloneDeep.add = (func) => {
  _cloneDeep.functions.unshift(func);
};

_cloneDeep.reset = () => {
  _cloneDeep.clear();
  _cloneDeep.add(cloneFunction.cloneObject);
  _cloneDeep.add(cloneFunction.cloneArrayType);
  _cloneDeep.add(cloneFunction.cloneIgnoreWeakSet);
  _cloneDeep.add(cloneFunction.cloneSet);
  _cloneDeep.add(cloneFunction.cloneIgnoreWeakMap);
  _cloneDeep.add(cloneFunction.cloneMap);
  _cloneDeep.add(cloneFunction.cloneIgnoreFunction);
  _cloneDeep.add(cloneFunction.cloneRegExp);
  _cloneDeep.add(cloneFunction.cloneDate);
};
_cloneDeep.reset();

export const cloneDeep = (source) => {
  return _cloneDeep(source);
};
_copyProperty(_cloneDeep,
  'clear,reset,add,' +
  '',
  cloneDeep,
);

export default {
  _clone, _cloneDeep,

  clone, cloneDeep,

  cloneFunction,
}


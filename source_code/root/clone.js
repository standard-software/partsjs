const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isObjectType,
  _isArray, _isArrayType,
  _isDate, _isRegExp,
  _isException,
  _isBooleanObject, _isNumberObject, _isStringObject,
  _isSymbol,
  _isMap, _isWeakMap,
  _isSet, _isWeakSet,
} = require('../type/type.js');

const object = require('../object/object.js');
const array = require('../array/array.js');

const {
  _copyProperty
} = object;

/**
 * cloneFunction
 */
const cloneFunction = {};

// function is no clone
cloneFunction.cloneIgnoreFunction = (
  source,
) => {
  if (!_isFunction(source)) {
    return undefined;
  }
  return source;
}

// support
//  user object and user arrayType
//  Just good usability
cloneFunction.cloneObject = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!(_isObject(source))) {
    return undefined;
  }

  const cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
}

cloneFunction.cloneArrayType = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!(_isArrayType(source))) {
    return undefined;
  }

  const cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
}

// support
//  all object
//  but Math or JSON etc clone
//  Cloning unnecessary objects
cloneFunction.cloneObjectType = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!_isObjectType(source)) {
    return undefined;
  }

  const cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return cloneValue;
}

// // support only simple object
// cloneFunction.cloneObject = (
//   source,
//   bufferWrite = () => {},
//   __cloneDeep = value => value,
// ) => {
//   if (!_isObject(source)) {
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
//   if (!_isArray(source)) {
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
  if (!_isDate(source)) {
    return undefined;
  }
  const cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
}

cloneFunction.cloneRegExp = (
  source,
  bufferWrite = () => {},
) => {
  if (!_isRegExp(source)) {
    return undefined;
  }
  const cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
}

// cloneMap
//  key not recursive call
//  value recursive call
cloneFunction.cloneMap = (
  source,
  bufferWrite = () => {},
  __cloneDeep = value => value,
) => {
  if (!_isMap(source)) {
    return undefined;;
  }
  const cloneValue = new Map();
  bufferWrite(source, cloneValue);
  for (const [key, value] of source.entries()) {
    cloneValue.set(key, __cloneDeep(value));
  }
  return cloneValue ;
}

cloneFunction.cloneIgnoreWeakMap = (
  source,
) => {
  if (!_isWeakMap(source)) {
    return undefined;;
  }
  return source ;
}

// cloneSet
//  element not recursive call
//  same map key
cloneFunction.cloneSet = (
  source,
  bufferWrite = () => {},
) => {
  if (!_isSet(source)) {
    return undefined;;
  }
  const cloneValue = new Set();
  bufferWrite(source, cloneValue);
  for (const value of source) {
    cloneValue.add(value);
  }
  return cloneValue ;
}

cloneFunction.cloneIgnoreWeakSet = (
  source,
) => {
  if (!_isWeakSet(source)) {
    return undefined;;
  }
  return source ;
}

/**
 * clone
 */
const _clone = (source) => {
  const __clone = (value) => {
    if (_isUndefined(value)) {
      return undefined;
    }
    for (let i = 0, l = _clone.functions.length; i < l; i += 1) {
      const result = _clone.functions[i](value);
      if (!_isUndefined(result)) {
        return result;
      }
    }
    return value;
  }
  return __clone(source);
}
_clone.functions = [];

_clone.clear = () => {
  _clone.functions = [];
};

_clone.add = (func) => {
  _clone.functions.unshift(func);
};

_clone.reset = () => {
  _clone.clear()
  _clone.add(cloneFunction.cloneObject);
  _clone.add(cloneFunction.cloneArrayType);
  _clone.add(cloneFunction.cloneIgnoreWeakSet);
  _clone.add(cloneFunction.cloneSet);
  _clone.add(cloneFunction.cloneIgnoreWeakMap);
  _clone.add(cloneFunction.cloneMap);
  _clone.add(cloneFunction.cloneIgnoreFunction);
  _clone.add(cloneFunction.cloneRegExp)
  _clone.add(cloneFunction.cloneDate)
};
_clone.reset();

const clone = (source) => {
  return _clone(source)
}

_copyProperty(_clone,
  'clear,reset,add,' +
  '',
  clone
);

/**
 * cloneDeep
 */
const _cloneDeep = (source) => {
  const CircularReferenceBuffer = {
    source: [],
    clone: [],
  }
  const __cloneDeep = (value) => {
    const index = CircularReferenceBuffer.source.indexOf(value);
    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }
    if (_isUndefined(value)) {
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
      if (!_isUndefined(result)) {
        return result;
      }
    }
    return value;
  }
  return __cloneDeep(source);
}

_cloneDeep.functions = [];

_cloneDeep.clear = (func) => {
  _cloneDeep.functions = [];
};

_cloneDeep.add = (func) => {
  _cloneDeep.functions.unshift(func);
};

_cloneDeep.reset = () => {
  _cloneDeep.clear()
  _cloneDeep.add(cloneFunction.cloneObject);
  _cloneDeep.add(cloneFunction.cloneArrayType);
  _cloneDeep.add(cloneFunction.cloneIgnoreWeakSet);
  _cloneDeep.add(cloneFunction.cloneSet);
  _cloneDeep.add(cloneFunction.cloneIgnoreWeakMap);
  _cloneDeep.add(cloneFunction.cloneMap);
  _cloneDeep.add(cloneFunction.cloneIgnoreFunction);
  _cloneDeep.add(cloneFunction.cloneRegExp)
  _cloneDeep.add(cloneFunction.cloneDate)
};
_cloneDeep.reset();

const cloneDeep = (source) => {
  return _cloneDeep(source)
}
_copyProperty(_cloneDeep,
  'clear,reset,add,' +
  '',
  cloneDeep
);

module.exports = {
  _clone, _cloneDeep,

  clone, cloneDeep,

  cloneFunction,
};

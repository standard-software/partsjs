const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isObjectType,
  _isArray,_isDate,_isRegExp,
  _isException,
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

cloneFunction.objectType = (source, __cloneDeep = value => value) => {
  if (_isFunction(source)) {
    return { result: false };
  }
  if (!_isObjectType(source)) {
    return { result: false };
  }

  const cloneValue = new source.constructor();
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }
  return { result: true, cloneValue } ;
}


cloneFunction.object = (source, __cloneDeep = value => value) => {
  if (!_isObject(source)) {
    return { result: false };
  }
  const cloneValue = {};
  for (let key in source) {
    cloneValue[key] = __cloneDeep(source[key]);
  }
  return { result: true, cloneValue } ;
}

cloneFunction.array = (source, __cloneDeep = value => value) => {
  if (!_isArray(source)) {
    return { result: false };
  }
  const cloneValue = [];
  for (let i = 0, l = source.length; i < l; i += 1) {
    const value = source[i];
    cloneValue.push(__cloneDeep(value))
  }
  return { result: true, cloneValue } ;
}

cloneFunction.date = (source) =>
  _isDate(source)
  ? {
    result: true,
    cloneValue: new Date(source.getTime()),
  }
  : {
    result: false,
  }

cloneFunction.regExp = (source) =>
  _isRegExp(source)
  ? {
    result: true,
    cloneValue: new RegExp(source.source),
  }
  : {
    result: false,
  }

/**
 * root.clone
 */
const _clone = (source) => {
  const __clone = (value) => {
    for (let i = 0, l = _clone.functions.length; i < l; i += 1) {
      const {
        result,
        cloneValue,
      } = _clone.functions[i](value);
      if (result) {
        return cloneValue;
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
  _clone.clear();
  _clone.add(cloneFunction.objectType);
  _clone.add(cloneFunction.regExp)
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
 * root.cloneDeep
 */
const _cloneDeep = (source) => {
  const __cloneDeep = (value) => {
    for (let i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      const {
        result,
        cloneValue,
      } = _cloneDeep.functions[i](value, __cloneDeep);
      if (result) {
        return cloneValue;
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
  _cloneDeep.add(cloneFunction.objectType)
  _cloneDeep.add(cloneFunction.regExp)
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


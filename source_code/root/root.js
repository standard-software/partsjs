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
 * root.clone
 */
const _clone = (source) => {
  if (_isFunction(source)) {
    return source;
  }
  if (!_isObjectType(source)) {
    return source;
  }
  const cloneValue = new source.constructor();
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = source[key];
    }
  }
  return cloneValue;
}

const clone = (source) => {
  return _clone(source)
}

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

_cloneDeep.clearFunctions = (func) => {
  _cloneDeep.functions = [];
};

_cloneDeep.addFunction = (func) => {
  _cloneDeep.functions.unshift(func);
};

_cloneDeep.objectClone = (source, __cloneDeep) => {
  if (_isObject(source)) {
    const cloneValue = {};
    for (let key in source) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
    return { result: true, cloneValue } ;
  } else {
    return { result: false };
  }
}

_cloneDeep.arrayClone = (source, __cloneDeep) => {
  if (_isArray(source)) {
    const cloneValue = [];
    for (let i = 0, l = source.length; i < l; i += 1) {
      const value = source[i];
      cloneValue.push(__cloneDeep(value))
    }
    return { result: true, cloneValue } ;
  } else {
    return { result: false };
  }
}

_cloneDeep.objectTypeClone = (source, __cloneDeep) => {
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

_cloneDeep.dateClone = (source) =>
  _isDate(source)
  ? {
    result: true,
    cloneValue: new Date(source.getTime()),
  }
  : {
    result: false,
  }


  _cloneDeep.regExpClone = (source) =>
  _isRegExp(source)
  ? {
    result: true,
    cloneValue: new RegExp(source.source),
  }
  : {
    result: false,
  }

_cloneDeep.resetFunctions = () => {
  _cloneDeep.clearFunctions()
  _cloneDeep.addFunction(_cloneDeep.objectTypeClone)
};
_cloneDeep.resetFunctions();

const cloneDeep = (source) => {
  return _cloneDeep(source)
}
_copyProperty(_cloneDeep,
  'clearFunctions,resetFunctions,addFunction,' +
  'objectClone,arrayClone,dateClone,regExpClone,' +
  '',
  cloneDeep
);

module.exports = {
  _clone, _cloneDeep,

  clone, cloneDeep,
};


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
  const __cloneObject = (source) => {
    const result = {};
    for (let key in source) {
      result[key] = source[key];
    }
    return result;
  }
  const __cloneArray = (source) => {
    const result = [];
    for (let i = 0, l = source.length; i < l; i += 1) {
      const value = source[i];
      result.push(value);
    }
    return result;
  }

  if (_isObject(source)) {
    return __cloneObject(source);
  } else if (_isArray(source)) {
    return __cloneArray(source);
  }
}

const clone = (source) => {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError(
      'root.clone args(source) is not [object|array]'
    );
  }

  return _clone(source)
}

/**
 * root.cloneDeep
 */
const _cloneDeep = (source) => {
  const __cloneDeep = (value) => {
    for (let i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      const { result, cloneValue } = _cloneDeep.functions[i](value, __cloneDeep);
      if (result) {
        return cloneValue;
      }
    }
    return value;
  }
  return __cloneDeep(source);
}

_cloneDeep.functions = [];

_cloneDeep.addFunction = (func) => {
  _cloneDeep.functions.unshift(func);
};

_cloneDeep.objectClone = (element, __cloneDeep) => {
  if (_isObject(element)) {
    const cloneValue = {};
    for (let key in element) {
      cloneValue[key] = __cloneDeep(element[key]);
    }
    return { result: true, cloneValue } ;
  } else {
    return { result: false };
  }
}

_cloneDeep.arrayClone = (element, __cloneDeep) => {
  if (_isArray(element)) {
    const cloneValue = [];
    for (let i = 0, l = element.length; i < l; i += 1) {
      const value = element[i];
      cloneValue.push(__cloneDeep(value))
    }
    return { result: true, cloneValue } ;
  } else {
    return { result: false };
  }
}

_cloneDeep.dateClone = (element) =>
  _isDate(element)
  ? {
    result: true,
    cloneValue: new Date(element.getTime()),
  }
  : {
    result: false,
  }

_cloneDeep.resetFunctions = () => {
  _cloneDeep.functions = [];
  _cloneDeep.addFunction(_cloneDeep.arrayClone);
  _cloneDeep.addFunction(_cloneDeep.objectClone);
};
_cloneDeep.resetFunctions();
_cloneDeep.addFunction(_cloneDeep.dateClone);

const cloneDeep = (source) => {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError(
      'root.cloneDeep args(source) is not [object|array]'
    );
  }

  return _cloneDeep(source)
}
_copyProperty(_cloneDeep,
  'resetFunctions,addFunction,' +
  'objectClone,arrayClone,dateClone,' +
  '',
  cloneDeep
);

module.exports = {
  _clone, _cloneDeep,

  clone, cloneDeep,
};


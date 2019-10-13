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
  if (_isObjectType(source)) {
    const cloneValue = new source.constructor();
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        cloneValue[key] = source[key];
      }
    }
    return cloneValue;
  } else {
    return source;
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

_cloneDeep.clearFunctions = (func) => {
  _cloneDeep.functions = [];
};

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

_cloneDeep.objectTypeClone = (element, __cloneDeep) => {
  if (_isObjectType(element)) {
    const cloneValue = new element.constructor();
    for (let key in element) {
      if (element.hasOwnProperty(key)) {
        cloneValue[key] = __cloneDeep(element[key]);
      }
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
  _cloneDeep.clearFunctions()
  _cloneDeep.addFunction(_cloneDeep.objectTypeClone)
};
_cloneDeep.resetFunctions();

const cloneDeep = (source) => {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError(
      'root.cloneDeep args(source) is not [object|array]'
    );
  }

  return _cloneDeep(source)
}
_copyProperty(_cloneDeep,
  'clearFunctions,resetFunctions,addFunction,' +
  'objectClone,arrayClone,dateClone,' +
  '',
  cloneDeep
);

module.exports = {
  _clone, _cloneDeep,

  clone, cloneDeep,
};


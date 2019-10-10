const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
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
    for (let [key, value] of Object.entries(source)) {
      result[key] = value;
    }
    return result;
  }
  const __cloneArray = (source) => {
    const result = [];
    // for (let [index, value] of source.entries()) {
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
  const __cloneDeepObject = (source) => {
    const result = {};
    for (let [key, value] of Object.entries(source)) {
      result[key] = conditionalReturn(value);
    }
    return result;
  };
  const __cloneDeepArray = (source) => {
    const result = [];
    for (let i = 0, l = source.length; i < l; i += 1) {
      const value = source[i];
      result.push(conditionalReturn(value))
    }
    return result;
  };
  const conditionalReturn = (value) => {
    if (_isObject(value)) {
      return __cloneDeepObject(value);
    } else if (_isArray(value)) {
      return __cloneDeepArray(value);
    } else {
      for (let i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
        const { result, cloneValue } = _cloneDeep.functions[i](value);
        if (result) {
          return cloneValue;
        }
      }
      return value;
    }
  }
  const __cloneDeep = (source) => {
    if (_isObject(source)) {
      return __cloneDeepObject(source);
    } else if (_isArray(source)) {
      return __cloneDeepArray(source);
    }
    return;
  };
  return __cloneDeep(source);
}
_cloneDeep.functions = [];
_cloneDeep.clearFunctions = () => {
  _cloneDeep.functions = [];
};
_cloneDeep.pushFunction = (func) => {
  _cloneDeep.functions.push(func);
};
_cloneDeep.dateClone = (element) =>
  _isDate(element)
  ? {
    result: true,
    cloneValue: new Date(element.getTime()),
  }
  : {
    result: false,
  }
_cloneDeep.pushFunction(_cloneDeep.dateClone);

const cloneDeep = (source) => {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError(
      'root.cloneDeep args(source) is not [object|array]'
    );
  }

  return _cloneDeep(source)
}
_copyProperty(_cloneDeep, 'clearFunctions,pushFunction,dateClone', cloneDeep);

module.exports = {
  _clone, _cloneDeep,

  clone, cloneDeep,
};


const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/type.js');

const object = require('../object/object.js');
const array = require('../array/array.js');

/**
 * root.clone
 */
const _clone = (source) => {
  if (_isObject(source)) {
    return object._clone(source);
  } else if (_isArray(source)) {
    return array._clone(source);
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

const _cloneDeep = (source) => {
  const __cloneDeepObject = (source) => {
    const result = {};
    for (let [key, value] of Object.entries(source)) {
      if (_isObject(value)) {
        result[key] = (__cloneDeepObject(value))
      } else if (_isArray(value)) {
        result[key] = (__cloneDeepArray(value))
      } else {
        result[key] = value;
      }
    }
    return result;
  };
  const __cloneDeepArray = (source) => {
    const result = [];
    for (let i = 0, l = source.length; i < l; i += 1) {
      const value = source[i];
      if (_isObject(value)) {
        result.push(__cloneDeepObject(value));
      } else if (_isArray(value)) {
        result.push(__cloneDeepArray(value));
      } else {
        result.push(value);
      }
    }
    return result;
  };
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

const cloneDeep = (source) => {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError(
      'root.cloneDeep args(source) is not [object|array]'
    );
  }

  return _cloneDeep(source)
}

module.exports = {
  _clone, _cloneDeep,

  clone, cloneDeep,
};


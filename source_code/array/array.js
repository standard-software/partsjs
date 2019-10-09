const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _inProperty,
} = require('../object/_inProperty.js')

/**
 * array.equal
 */
const _equal = (value1, value2) => {
  if (value1.length !== value2.length) {
    return false;
  }
  for (let i = 0, l = value1.length; i < l; i += 1) {
    if (_isArray(value1[i]) && _isArray(value2[i])) {
      if (_equal(value1[i], value2[i]) === false) {
        return false;
      }
    } else if (value1[i] !== value2[i]) {
      return false;
    }
  }
  return true;
};

const equal = (value1, value2) => {
  if (_inProperty(value1, 'value1,value2')) {
    ({ value1, value2 } = value1);
  }

  if (!_isArray(value1)) {
    throw new TypeError(
      'array.equal args(value) is not array'
    );
  }
  if (!_isArray(value2)) {
    throw new TypeError(
      'array.equal args(value2) is not array'
    );
  }

  return _equal(value1, value2);
};

/**
 * array.clone
 */
const _clone = (sourceArray) => {
  const result = [];
  // for (let [index, value] of sourceArray.entries()) {
  for (let i = 0, l = sourceArray.length; i < l; i += 1) {
    const value = sourceArray[i];
    result.push(value);
  }
  return result;
}

const clone = (sourceArray) => {
  if (!_isArray(sourceArray)) {
    throw new TypeError(
      'array.clone args(sourceArray) is not array'
    );
  }

  return _clone(sourceArray)
}

const _cloneDeep = (sourceArray) => {
  const __cloneDeep = (sourceArray) => {
    const result = [];
    // for (let [index, value] of sourceArray.entries()) {
    for (let i = 0, l = sourceArray.length; i < l; i += 1) {
      const value = sourceArray[i];
      if (_isArray(value)) {
        result.push(__cloneDeep(value))
      } else {
        result.push(value);
      }
    }
    return result;
  };
  return __cloneDeep(sourceArray);
}

const cloneDeep = (sourceArray) => {
  if (!_isArray(sourceArray)) {
    throw new TypeError(
      'array.cloneDeep args(sourceArray) is not array'
    );
  }

  return _cloneDeep(sourceArray)
}

/**
 * array.min max
 */
const _min = (array) => {
  if (array.length === 0) {
    return null;
  }
  var result = array[0];
  for (var i = 1, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])){
      throw new TypeError(
        '_min args(array) element is not number'
      );
    }
    if (array[i] < result) {
      result = array[i];
    }
  }
  return result;
};

const min = (array) => {
  if (!_isArray(array)){
    throw new TypeError(
      'min args(array) is not array'
    );
  }
  return _min(array);
};

const _max = (array) => {
  if (array.length === 0) {
    return null;
  }
  var result = array[0];
  for (var i = 1, l = array.length; i < l; i += 1) {
    if (!_isNumber(array[i])){
      throw new TypeError(
        '_max args(array) element is not number'
      );
    }
    if (result < array[i]) {
      result = array[i];
    }
  }
  return result;
};

const max = (array) => {
  if (!_isArray(array)){
    throw new TypeError(
      'max args(array) is not array'
    );
  }
  return _max(array);
};

module.exports = {
  _equal, _clone, _cloneDeep,
  _min, _max,

  equal, clone, cloneDeep,
  min, max,
};


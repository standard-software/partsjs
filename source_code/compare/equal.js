const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isObjectType,
  _isArray, _isArrayType,
  _isDate, _isRegExp,
  _isException,
  _isMap, _isWeakMap,
  _isSet, _isWeakSet,

  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,

} = require('../type/type.js');

const {
  _copyProperty, _propertyCount, _inProperty,
} = require('../object/object.js');

/**
 * equalFunction
 */
const equalFunction = {};

equalFunction.equalValue = (
  value1, value2,
) => {
  if (_isNaNStrict(value1) && _isNaNStrict(value2)) {
    return true;
  }
  return value1 === value2;
};

// function is no recursive call
equalFunction.equalFunction = (
  value1, value2,
) => {
  if (!isFunction(value1, value2)) {
    return;
  }
  return value1 === value2;
};

equalFunction.equalObject = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!(isObject(value1, value2))) {
    return;
  }
  const value1Keys = Object.keys(value1);
  const value2Keys = Object.keys(value2);
  if (value1Keys.length !== value2Keys.length) {
    return false;
  }
  bufferWrite(value1, value2);
  for (let i = 0, l = value1Keys.length; i < l; i += 1) {
    const key = value1Keys[i];
    if (__equalDeep(value1[key], value2[key]) === false) {
      return false;
    }
  }
  return true;
};

equalFunction.equalArrayType = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!(isArrayType(value1, value2))) {
    return;
  }
  if (value1.length !== value2.length) {
    return false;
  }
  bufferWrite(value1, value2);
  for (let i = 0, l = value1.length; i < l; i += 1) {
    if (__equalDeep(value1[i], value2[i]) === false) {
      return false;
    }
  }
  return true;
};

equalFunction.equalDate = (
  value1, value2,
) => {
  if (!isDate(value1, value2)) {
    return;
  }
  return value1.getTime() === value2.getTime();
};

equalFunction.equalRegExp = (
  value1, value2,
) => {
  if (!isRegExp(value1, value2)) {
    return;
  }
  return value1.source === value2.source;
};

equalFunction.equalMap = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isMap(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const [key, value] of value1.entries()) {
    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  }
  return true;
};

equalFunction.equalWeakMap = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isWeakMap(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const [key, value] of value1.entries()) {
    if (__equalDeep(value, value2.get(key)) === false) {
      return false;
    }
  }
  return true;
};

equalFunction.equalSet = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isSet(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const v1item of value1) {
    let result = false;
    for (const v2item of value2) {
      if (__equalDeep(v1item, v2item) === true) {
        result = true;
      }
    }
    if (result === false) {
      return false;
    }
  }
  return true;
};

equalFunction.equalWeakSet = (
  value1, value2,
  bufferWrite = () => {},
  __equalDeep = (v1, v2) => v1 === v2,
) => {
  if (!isWeakSet(value1, value2)) {
    return;
  }
  if (value1.size !== value2.size) {
    return false;
  }
  bufferWrite(value1, value2);
  for (const v1item of value1) {
    let result = false;
    for (const v2item of value2) {
      if (__equalDeep(v1item, v2item) === true) {
        result = true;
      }
    }
    if (result === false) {
      return false;
    }
  }
  return true;
};

/**
 * equal
 */
const _equal = (value1, value2) => {
  const __equal = (value1, value2) => {
    for (let i = 0, l = _equal.functions.length; i < l; i += 1) {
      const result = _equal.functions[i](value1, value2);
      if (!_isUndefined(result)) {
        return result;
      }
    }
    return false;
  };
  return __equal(value1, value2);
};
_equal.functions = [];

_equal.clear = () => {
  _equal.functions = [];
};

_equal.add = (func) => {
  _equal.functions.unshift(func);
};

_equal.reset = () => {
  _equal.clear();
  _equal.add(equalFunction.equalValue);
  _equal.add(equalFunction.equalObject);
  _equal.add(equalFunction.equalArrayType);
  _equal.add(equalFunction.equalWeakSet);
  _equal.add(equalFunction.equalSet);
  _equal.add(equalFunction.equalWeakMap);
  _equal.add(equalFunction.equalMap);
  _equal.add(equalFunction.equalFunction);
  _equal.add(equalFunction.equalRegExp);
  _equal.add(equalFunction.equalDate);
};
_equal.reset();

const equal = (value1, value2) => {
  if (_inProperty(value1, 'value1, value2')) {
    ({ value1, value2 } = value1);
  }

  return _equal(value1, value2);
};
_copyProperty(_equal,
  'clear,reset,add,' +
  '',
  equal,
);

/**
 * equalDeep
 */
const _equalDeep = (value1, value2) => {
  const CircularReferenceBuffer = {
    v1Array: [],
    v2Array: [],
  };
  const __equalDeep = (value1, value2) => {
    const index = CircularReferenceBuffer.v1Array.indexOf(value1);
    if (index !== -1) {
      if (CircularReferenceBuffer.v2Array[index] === value2) {
        return true;
      }
      return value1 === value2;
    }
    for (let i = 0, l = _equalDeep.functions.length; i < l; i += 1) {
      const result = _equalDeep.functions[i](
        value1, value2,
        (v1, v2) => {
          CircularReferenceBuffer.v1Array.push(v1);
          CircularReferenceBuffer.v2Array.push(v2);
        },
        __equalDeep,
      );
      if (!_isUndefined(result)) {
        return result;
      }
    }
    return value1 === value2;
  };
  return __equalDeep(value1, value2);
};
_equalDeep.functions = [];

_equalDeep.clear = () => {
  _equalDeep.functions = [];
};

_equalDeep.add = (func) => {
  _equalDeep.functions.unshift(func);
};

_equalDeep.reset = () => {
  _equalDeep.clear();
  _equalDeep.add(equalFunction.equalObject);
  _equalDeep.add(equalFunction.equalArrayType);
  _equalDeep.add(equalFunction.equalWeakSet);
  _equalDeep.add(equalFunction.equalSet);
  _equalDeep.add(equalFunction.equalWeakMap);
  _equalDeep.add(equalFunction.equalMap);
  _equalDeep.add(equalFunction.equalFunction);
  _equalDeep.add(equalFunction.equalRegExp);
  _equalDeep.add(equalFunction.equalDate);
};
_equalDeep.reset();

const equalDeep = (value1, value2) => {
  if (_inProperty(value1, 'value1,value2')) {
    ({ value1, value2 } = value1);
  }

  return _equalDeep(value1, value2);
};
_copyProperty(_equalDeep,
  'clear,reset,add,' +
  '',
  equalDeep,
);

module.exports = {
  _equal, _equalDeep,

  equal, equalDeep,

  equalFunction,

};

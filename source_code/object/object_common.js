const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _inProperty,
} = require('./_inProperty.js');

const _copyProperty = (fromObject, propertyArray, toObject = {}) => {

  if (_isString(propertyArray)) {
    propertyArray = propertyArray.split(',');
  }

  for (let i = 0; i < propertyArray.length; i += 1) {
    if ((propertyArray[i] === '')
    || (_isUndefined(propertyArray[i]))) {
      continue;
    }
    if (!_isString(propertyArray[i])) {
      throw new TypeError(
        'copyProperty args(propertyArray) element is not string'
      );
    }
    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }
  return toObject;
}

const copyProperty = (fromObject, propertyArray, toObject = {}) => {
  if (_inProperty(fromObject, 'fromObject,propertyArray')) {
    ({ fromObject, propertyArray, toObject = {} } = fromObject)
  }

  if (!_isObject(fromObject)) {
    throw new TypeError(
      'copyProperty args(fromObject) is not object'
    );
  }
  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError(
        'copyProperty args(propertyArray) is not [array|string]'
      );
    }
  }
  if (!_isObject(toObject)) {
    throw new TypeError(
      'copyProperty args(toObject) is not object'
    );
  }

  _copyProperty(
    fromObject,
    propertyArray,
    toObject,
  )
}

const _propertyCount = (object) => {
  var result = 0;
  for (let [key, value] of Object.entries(object)) {
    result += 1;
  }
  return result;
}

const propertyCount = (object) => {
  if (!_isObject(object)) {
    throw new TypeError(
      'propertyCount args(object) is not object'
    );
  }
  return _propertyCount(object);
}

const copyProp = copyProperty;
const propCount = propertyCount;

module.exports = {
  _copyProperty,
  _propertyCount,

  copyProperty,
  propertyCount,

  copyProp,
  propCount,
};
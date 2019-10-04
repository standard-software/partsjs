const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/_isType.js');

const _inProperty = (object, propertyArray, hasOwn = true) => {

  if (!_isObject(object)) {
    return false;
  }

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
    if (hasOwn) {
      if (!object.hasOwnProperty(propertyArray[i])) {
        return false;
      }
    } else {
      if (!(propertyArray[i] in object)) {
        return false;
      }
    }
  }
  return true;
}

const inProperty = (object, propertyArray, hasOwn = true) => {
  if (_inProperty(object, 'object,propertyArray')) {
    ({ object, propertyArray, hasOwn = true } = object)
  }

  // no object check

  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError(
        'copyProperty args(propertyArray) is not [array|string]'
      );
    }
  }
  if (!_isBoolean(hasOwn)) {
    throw new TypeError(
      'copyProperty args(hasOwn) is not boolean'
    );
  }

  return _inProperty(
    object,
    propertyArray,
    hasOwn,
  )
}

const inProp = inProperty;

module.exports = {
  _inProperty,
  inProperty,
  inProp,
};
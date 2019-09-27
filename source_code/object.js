const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('./type.js');

const {
  initialValue,
} = require('./compare.js');

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
  if (_isObject(fromObject)
  && ('fromObject' in fromObject)
  && ('propertyArray' in fromObject)) {
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

const _inProperty = (object, propertyArray) => {

  if (_isString(propertyArray)) {
    propertyArray = propertyArray.split(',');
  }

  let result = true;
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
    if (!(propertyArray[i] in object)) {
      return false;
    }
  }
  return true;
}

const inProperty = (object, propertyArray) => {
  if (_isObject(object)
  && ('object' in object)
  && ('propertyArray' in object)) {
    ({ object, propertyArray } = object)
  }

  // no object check

  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError(
        'copyProperty args(propertyArray) is not [array|string]'
      );
    }
  }

  return _inProperty(
    object,
    propertyArray,
  )
}

const copyProp = copyProperty;
const inProp = inProperty;

module.exports = {
  _copyProperty, _inProperty,

  copyProperty, inProperty,

  copyProp, inProp,
};
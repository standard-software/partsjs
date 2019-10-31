const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/_isType.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

/**
 * _inProperty
 */
const _inProperty = (object, propertyArray, hasOwn = true) => {

  if (!_isObject(object)) {
    return false;
  }

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (let i = 0; i < propertyArray.length; i += 1) {
    if ((propertyArray[i] === '')
    || (_isUndefined(propertyArray[i]))) {
      continue;
    }
    if (!_isString(propertyArray[i])) {
      throw new TypeError(
        '_inProperty args(propertyArray) element is not string'
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

module.exports = {
  _inProperty,
};
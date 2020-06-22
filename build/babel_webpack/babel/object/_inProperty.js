"use strict";

var _require = require('../type/_isType.js'),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = require('../string/_replaceAll.js'),
    _replaceAll = _require2._replaceAll;
/**
 * _inProperty
 */


var _inProperty = function _inProperty(object, propertyArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!_isObject(object)) {
    return false;
  }

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || _isUndefined(propertyArray[i])) {
      continue;
    }

    if (!_isString(propertyArray[i])) {
      throw new TypeError('_inProperty args(propertyArray) element is not string');
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
};

module.exports = {
  _inProperty: _inProperty
};
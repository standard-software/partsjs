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

var _require3 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = require('../object/object_common.js'),
    _getProperty = _require4._getProperty;
/**
 * _inProperty
 */


var _inProperty = function _inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!_isObject(object)) {
    return false;
  }

  if (_isString(propertyPathArray)) {
    propertyPathArray = _replaceAll(propertyPathArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyPathArray.length; i += 1) {
    // if ((propertyPathArray[i] === '')
    // || (_isUndefined(propertyPathArray[i]))) {
    //   continue;
    // }
    if (!_isString(propertyPathArray[i])) {
      throw new TypeError('_inProperty args(propertyArray) element is not string');
    }

    var result = _getProperty(object, propertyPathArray[i], hasOwn);

    if (_isUndefined(result)) {
      return false;
    }
  }

  return true;
};
/**
 * inProperty
 */


var inProperty = function inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (isObjectParameter(object, 'object, propertyPathArray', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyPathArray = _object.propertyPathArray;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!_isObject(object)) {
    throw new TypeError('inProperty args(fromObject) is not object');
  }

  if (!_isString(propertyPathArray)) {
    if (!_isArray(propertyPathArray)) {
      throw new TypeError('inProperty args(propertyPathArray) is not [array|string]');
    }
  }

  if (!_isBoolean(hasOwn)) {
    throw new TypeError('inProperty args(hasOwn) is not boolean');
  }

  return _inProperty(object, propertyPathArray, hasOwn);
};

var inProp = inProperty;
module.exports = {
  _inProperty: _inProperty,
  inProperty: inProperty,
  inProp: inProp
};
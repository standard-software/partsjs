"use strict";

var _require = require('../type/type.js'),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isArrayType = _require._isArrayType,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isError = _require._isError,
    _isBooleanObject = _require._isBooleanObject,
    _isNumberObject = _require._isNumberObject,
    _isStringObject = _require._isStringObject;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;

var _require3 = require('../object/_propertyCount.js'),
    _propertyCount = _require3._propertyCount;

var _require4 = require('../string/_replaceAll.js'),
    _replaceAll = _require4._replaceAll;
/**
 * copyProperty
 */


var _copyProperty = function _copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || _isUndefined(propertyArray[i])) {
      continue;
    }

    if (!_isString(propertyArray[i])) {
      throw new TypeError('copyProperty args(propertyArray) element is not string');
    }

    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }

  return toObject;
};

var copyProperty = function copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (isObjectParameter(fromObject, 'fromObject,propertyArray', 'toObject')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyArray = _fromObject.propertyArray;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  }

  if (!_isObject(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError('copyProperty args(propertyArray) is not [array|string]');
    }
  }

  if (!_isObject(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  _copyProperty(fromObject, propertyArray, toObject);
};
/**
 * propertyCount
 */


var propertyCount = function propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isObjectParameter(object, 'object', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!_isObjectType(object)) {
    throw new TypeError('propertyCount args(object) is not object type');
  }

  if (!_isBoolean(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return _propertyCount(object, hasOwn);
};
/**
 * getProperty
 */


var _getProperty = function _getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var result = object;
  var propertyArray = propertyPath.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      return undefined;
    }

    if (hasOwn) {
      if (!result.hasOwnProperty(propertyArray[i])) {
        return undefined;
      }
    } else {
      if (!(propertyArray[i] in result)) {
        return undefined;
      }
    }

    if (_isUndefined(result[propertyArray[i]])) {
      return undefined;
    }

    result = result[propertyArray[i]];
  }

  return result;
};

var getProperty = function getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (isObjectParameter(object, 'object, propertyPath', 'hasOwn')) {
    var _object2 = object;
    object = _object2.object;
    propertyPath = _object2.propertyPath;
    var _object2$hasOwn = _object2.hasOwn;
    hasOwn = _object2$hasOwn === void 0 ? true : _object2$hasOwn;
  }

  if (!_isObject(object)) {
    throw new TypeError('getProperty args(object) is not object');
  }

  if (!_isString(propertyPath)) {
    throw new TypeError('getProperty args(propertyPath) is not string');
  }

  if (!_isBoolean(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return _getProperty(object, propertyPath, hasOwn);
};
/**
 * setProperty
 */


var _setProperty = function _setProperty(object, path, value) {
  var propertyArray = path.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      throw new Error('setProperty args(propertyPath) is no exist property');
    }
  }

  var result = object;

  for (var _i = 0, _l = propertyArray.length - 1; _i < _l; _i += 1) {
    if (!(_isObject(result[propertyArray[_i]]) || _isArrayType(result[propertyArray[_i]]))) {
      result[propertyArray[_i]] = {};
    }

    result = result[propertyArray[_i]];
  }

  result[propertyArray[propertyArray.length - 1]] = value;
  return result;
};

var setProperty = function setProperty(object, propertyPath, value) {
  if (isObjectParameter(object, 'object, propertyPath, value')) {
    var _object3 = object;
    object = _object3.object;
    propertyPath = _object3.propertyPath;
    value = _object3.value;
  }

  if (!_isObject(object)) {
    throw new TypeError('setProperty args(object) is not object');
  }

  if (!_isString(propertyPath)) {
    throw new TypeError('setProperty args(propertyPath) is not string');
  }

  return _setProperty(object, propertyPath, value);
};

var copyProp = copyProperty;
var propCount = propertyCount;
var getProp = getProperty;
var setProp = setProperty;
module.exports = {
  _copyProperty: _copyProperty,
  _propertyCount: _propertyCount,
  _getProperty: _getProperty,
  _setProperty: _setProperty,
  copyProperty: copyProperty,
  propertyCount: propertyCount,
  getProperty: getProperty,
  setProperty: setProperty,
  copyProp: copyProp,
  propCount: propCount,
  getProp: getProp,
  setProp: setProp
};
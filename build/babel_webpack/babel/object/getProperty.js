"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getProp = exports.getProperty = exports._getProperty = exports._getPropertyBase = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _has2 = require("../object/has.js");

/**
 * getProperty
 */
var _getPropertyBase = function _getPropertyBase(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var result = object;
  var propertyArray = propertyPath.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      return {
        "in": false
      };
    }

    var hasResult = (0, _has2._has)(result, propertyArray[i], hasOwn);

    if (!hasResult) {
      return {
        "in": false
      };
    }

    if ((0, _type.isUndefined)(result[propertyArray[i]])) {
      return {
        "in": true,
        value: undefined
      };
    }

    result = result[propertyArray[i]];
  }

  return {
    "in": true,
    value: result
  };
};

exports._getPropertyBase = _getPropertyBase;

var _getProperty = function _getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var result = _getPropertyBase(object, propertyPath, hasOwn);

  if (!(0, _type.isBoolean)(result["in"])) {
    throw new Error('_getProperty _getPropertyBase result is not boolean');
  }

  if (result["in"] === false) {
    return undefined;
  } else {
    return result.value;
  }
};

exports._getProperty = _getProperty;

var getProperty = function getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyPath, 'propertyPath', 'hasOwn')) {
    var _propertyPath = propertyPath;
    propertyPath = _propertyPath.propertyPath;
    var _propertyPath$hasOwn = _propertyPath.hasOwn;
    hasOwn = _propertyPath$hasOwn === void 0 ? true : _propertyPath$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, 'hasOwn')) {
    var _hasOwn = hasOwn;
    hasOwn = _hasOwn.hasOwn;
  }

  if (!(0, _type.isObject)(object)) {
    throw new TypeError('getProperty args(object) is not object');
  }

  if (!(0, _type.isString)(propertyPath)) {
    throw new TypeError('getProperty args(propertyPath) is not string');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return _getProperty(object, propertyPath, hasOwn);
};

exports.getProperty = getProperty;
var getProp = getProperty;
exports.getProp = getProp;
var _default = {
  _getPropertyBase: _getPropertyBase,
  _getProperty: _getProperty,
  getProperty: getProperty,
  getProp: getProp
};
exports["default"] = _default;
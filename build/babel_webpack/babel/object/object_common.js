"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setProp = exports.getProp = exports.propCount = exports.copyProp = exports.setProperty = exports._setProperty = exports.getProperty = exports._getProperty = exports._getPropertyBase = exports.propertyCount = exports.copyProperty = exports._copyProperty = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _replaceAll2 = require("../string/_replaceAll.js");

/**
 * copyProperty
 */
var _copyProperty = function _copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _type.isString)(propertyArray)) {
    propertyArray = (0, _replaceAll2._replaceAll)(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || (0, _type.isUndefined)(propertyArray[i])) {
      continue;
    }

    if (!(0, _type.isString)(propertyArray[i])) {
      throw new TypeError('copyProperty args(propertyArray) element is not string');
    }

    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }

  return toObject;
};

exports._copyProperty = _copyProperty;

var copyProperty = function copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _isObjectParameter.isObjectParameter)(fromObject, 'fromObject,propertyArray', 'toObject')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyArray = _fromObject.propertyArray;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  }

  if (!(0, _type.isObject)(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!(0, _type.isString)(propertyArray)) {
    if (!(0, _type.isArray)(propertyArray)) {
      throw new TypeError('copyProperty args(propertyArray) is not [array|string]');
    }
  }

  if (!(0, _type.isObject)(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  _copyProperty(fromObject, propertyArray, toObject);
};
/**
 * propertyCount
 */


exports.copyProperty = copyProperty;

var propertyCount = function propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!(0, _type.isObjectType)(object)) {
    throw new TypeError('propertyCount args(object) is not object type');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return (0, _propertyCount2._propertyCount)(object, hasOwn);
};
/**
 * getProperty
 */


exports.propertyCount = propertyCount;

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

    if (hasOwn) {
      if (!Object.prototype.hasOwnProperty.call(result, propertyArray[i])) {
        return {
          "in": false
        };
      }
    } else {
      if (!(propertyArray[i] in result)) {
        return {
          "in": false
        };
      }
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
    var _object2 = object;
    object = _object2.object;
    propertyPath = _object2.propertyPath;
    var _object2$hasOwn = _object2.hasOwn;
    hasOwn = _object2$hasOwn === void 0 ? true : _object2$hasOwn;
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
/**
 * setProperty
 */


exports.getProperty = getProperty;

var _setProperty = function _setProperty(object, path, value) {
  var propertyArray = path.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      throw new Error('setProperty args(propertyPath) is no exist property');
    }
  }

  var result = object;

  for (var _i = 0, _l = propertyArray.length - 1; _i < _l; _i += 1) {
    if (!((0, _type.isObject)(result[propertyArray[_i]]) || (0, _type.isArrayType)(result[propertyArray[_i]]))) {
      result[propertyArray[_i]] = {};
    }

    result = result[propertyArray[_i]];
  }

  result[propertyArray[propertyArray.length - 1]] = value;
  return result;
};

exports._setProperty = _setProperty;

var setProperty = function setProperty(object, propertyPath, value) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath, value')) {
    var _object3 = object;
    object = _object3.object;
    propertyPath = _object3.propertyPath;
    value = _object3.value;
  }

  if (!(0, _type.isObject)(object)) {
    throw new TypeError('setProperty args(object) is not object');
  }

  if (!(0, _type.isString)(propertyPath)) {
    throw new TypeError('setProperty args(propertyPath) is not string');
  }

  return _setProperty(object, propertyPath, value);
};

exports.setProperty = setProperty;
var copyProp = copyProperty;
exports.copyProp = copyProp;
var propCount = propertyCount;
exports.propCount = propCount;
var getProp = getProperty;
exports.getProp = getProp;
var setProp = setProperty;
exports.setProp = setProp;
var _default = {
  _copyProperty: _copyProperty,
  _propertyCount: _propertyCount2._propertyCount,
  _getProperty: _getProperty,
  _getPropertyBase: _getPropertyBase,
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
exports["default"] = _default;
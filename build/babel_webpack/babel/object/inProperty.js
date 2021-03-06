"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.inProp = exports.inProperty = exports._inProperty = void 0;

var _type = require("../type/type.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _getProperty2 = require("../object/_getProperty.js");

var _splitCommaItems2 = require("../string/splitCommaItems.js");

var _includes = require("../compare/__includes.js");

/**
 * _inProperty
 */
var _inProperty = function _inProperty(object, propertyPaths) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _type.isString)(propertyPaths)) {
    propertyPaths = (0, _splitCommaItems2._splitCommaItems)(propertyPaths);
  } else {
    if ((0, _includes.__includes)(propertyPaths, '')) {
      throw new Error('_inProperty args(propertyPaths) element is not empty string');
    }
  }

  if (propertyPaths.length === 0) {
    return false;
  }

  for (var i = 0; i < propertyPaths.length; i += 1) {
    var result = (0, _getProperty2._getProperty)(object, propertyPaths[i], hasOwn, true);

    if (result.exist === false) {
      return false;
    }
  }

  return true;
};
/**
 * inProperty
 */


exports._inProperty = _inProperty;

var inProperty = function inProperty(object, propertyPaths) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPaths', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyPaths = _object.propertyPaths;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyPaths, 'propertyPaths', 'hasOwn')) {
    var _propertyPaths = propertyPaths;
    propertyPaths = _propertyPaths.propertyPaths;
    var _propertyPaths$hasOwn = _propertyPaths.hasOwn;
    hasOwn = _propertyPaths$hasOwn === void 0 ? true : _propertyPaths$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, 'hasOwn')) {
    var _hasOwn = hasOwn;
    hasOwn = _hasOwn.hasOwn;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('inProperty args(object) is not objectLike');
  }

  if (!((0, _type.isString)(propertyPaths) || (0, _type.isStringArray)(propertyPaths))) {
    throw new TypeError('inProperty args(propertyPaths) is not [string array|string]');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('inProperty args(hasOwn) is not boolean');
  }

  return _inProperty(object, propertyPaths, hasOwn);
};

exports.inProperty = inProperty;
var inProp = inProperty;
exports.inProp = inProp;
var _default = {
  _inProperty: _inProperty,
  inProperty: inProperty,
  inProp: inProp
};
exports["default"] = _default;
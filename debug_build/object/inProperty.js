"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.inProp = exports.inProperty = exports._inProperty = void 0;

var _isType = require("../type/isType.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _object_common = require("../object/object_common.js");

/**
 * _inProperty
 */
var _inProperty = function _inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!(0, _isType.isObject)(object)) {
    return false;
  }

  if ((0, _isType.isString)(propertyPathArray)) {
    propertyPathArray = (0, _replaceAll2._replaceAll)(propertyPathArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyPathArray.length; i += 1) {
    if (i !== 0 && i === propertyPathArray.length - 1) {
      if (propertyPathArray[i] === '' || (0, _isType.isUndefined)(propertyPathArray[i])) {
        continue;
      }
    }

    if (!(0, _isType.isString)(propertyPathArray[i])) {
      throw new TypeError('_inProperty args(propertyArray) element is not string');
    }

    var result = (0, _object_common._getPropertyBase)(object, propertyPathArray[i], hasOwn);

    if (result["in"] === false) {
      return false;
    }
  }

  return true;
};
/**
 * inProperty
 */


exports._inProperty = _inProperty;

var inProperty = function inProperty(object, propertyPathArray) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPathArray', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyPathArray = _object.propertyPathArray;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  }

  if (!(0, _isType.isObject)(object)) {
    throw new TypeError('inProperty args(object) is not object');
  }

  if (!(0, _isType.isString)(propertyPathArray)) {
    if (!(0, _isType.isArray)(propertyPathArray)) {
      throw new TypeError('inProperty args(propertyPathArray) is not [array|string]');
    }
  }

  if (!(0, _isType.isBoolean)(hasOwn)) {
    throw new TypeError('inProperty args(hasOwn) is not boolean');
  }

  return _inProperty(object, propertyPathArray, hasOwn);
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
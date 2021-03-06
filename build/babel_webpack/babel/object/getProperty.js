"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getProp = exports.getProperty = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _has2 = require("../object/has.js");

var _splitDotItems2 = require("../string/splitDotItems.js");

var _getProperty2 = require("../object/_getProperty.js");

/**
 * getProperty
 */
var getProperty = function getProperty(object, propertyPath) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath', 'hasOwn, detail')) {
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
    var _object$detail = _object.detail;
    detail = _object$detail === void 0 ? false : _object$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyPath, 'propertyPath', 'hasOwn, detail')) {
    var _propertyPath = propertyPath;
    propertyPath = _propertyPath.propertyPath;
    var _propertyPath$hasOwn = _propertyPath.hasOwn;
    hasOwn = _propertyPath$hasOwn === void 0 ? true : _propertyPath$hasOwn;
    var _propertyPath$detail = _propertyPath.detail;
    detail = _propertyPath$detail === void 0 ? false : _propertyPath$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, '', 'hasOwn, detail', 1)) {
    var _hasOwn = hasOwn;
    var _hasOwn$hasOwn = _hasOwn.hasOwn;
    hasOwn = _hasOwn$hasOwn === void 0 ? true : _hasOwn$hasOwn;
    var _hasOwn$detail = _hasOwn.detail;
    detail = _hasOwn$detail === void 0 ? false : _hasOwn$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('getProperty args(object) is not object');
  }

  if (!(0, _type.isString)(propertyPath)) {
    throw new TypeError('getProperty args(propertyPath) is not string');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('getProperty args(detail) is not boolean');
  }

  return (0, _getProperty2._getProperty)(object, propertyPath, hasOwn, detail);
};

exports.getProperty = getProperty;
var getProp = getProperty;
exports.getProp = getProp;
var _default = {
  getProperty: getProperty,
  getProp: getProp
};
exports["default"] = _default;
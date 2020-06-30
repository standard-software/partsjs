"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propCount = exports.propertyCount = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _propertyCount2 = require("../object/_propertyCount.js");

/**
 * propertyCount
 */
var propertyCount = function propertyCount(object) {
  var hasOwn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? true : _object$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, 'hasOwn')) {
    var _hasOwn = hasOwn;
    hasOwn = _hasOwn.hasOwn;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('propertyCount args(object) is not object type');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('getProperty args(hasOwn) is not boolean');
  }

  return (0, _propertyCount2._propertyCount)(object, hasOwn);
};

exports.propertyCount = propertyCount;
var propCount = propertyCount;
exports.propCount = propCount;
var _default = {
  propertyCount: propertyCount,
  propCount: propCount
};
exports["default"] = _default;
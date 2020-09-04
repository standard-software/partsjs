"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hasOwn = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _hasOwn2 = require("../object/_hasOwn.js");

/**
 * hasOwn
 */
var hasOwn = function hasOwn(object, propertyName) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyName')) {
    var _object = object;
    object = _object.object;
    propertyName = _object.propertyName;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyName, 'propertyName')) {
    var _propertyName = propertyName;
    propertyName = _propertyName.propertyName;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('hasOwn args(object) is not objectLike');
  }

  if (!(0, _type.isString)(propertyName)) {
    throw new TypeError('hasOwn args(propertyName) is not string');
  }

  return (0, _hasOwn2._hasOwn)(object, propertyName);
};

exports.hasOwn = hasOwn;
var _default = {
  hasOwn: hasOwn
};
exports["default"] = _default;
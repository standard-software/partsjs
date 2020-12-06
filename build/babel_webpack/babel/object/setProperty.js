"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setProp = exports.setProperty = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _splitCommaItems2 = require("../string/splitCommaItems.js");

var _splitDotItems2 = require("../string/splitDotItems.js");

var _includes = require("../compare/__includes.js");

var _string_common = require("../string/string_common.js");

var _setProperty2 = require("../object/_setProperty.js");

/**
 * setProperty
 */
var setProperty = function setProperty(object, propertyPath, value) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyPath, value')) {
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
    value = _object.value;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyPath, 'propertyPath, value')) {
    var _propertyPath = propertyPath;
    propertyPath = _propertyPath.propertyPath;
    value = _propertyPath.value;
  } else if ((0, _isObjectParameter.isObjectParameter)(value, 'value')) {
    var _value = value;
    value = _value.value;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('setProperty args(object) is not object');
  }

  if (!(0, _type.isString)(propertyPath)) {
    throw new TypeError('setProperty args(propertyPath) is not string');
  }

  return (0, _setProperty2._setProperty)(object, propertyPath, value);
};

exports.setProperty = setProperty;
var setProp = setProperty;
exports.setProp = setProp;
var _default = {
  setProperty: setProperty,
  setProp: setProp
};
exports["default"] = _default;
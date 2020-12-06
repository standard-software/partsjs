"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.copyProp = exports.copyProperty = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _splitCommaItems2 = require("../string/splitCommaItems.js");

var _splitDotItems2 = require("../string/splitDotItems.js");

var _includes = require("../compare/__includes.js");

var _string_common = require("../string/string_common.js");

var _copyProperty2 = require("../object/_copyProperty.js");

/**
 * copyProperty
 */
var copyProperty = function copyProperty(fromObject, propertyNames) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _isObjectParameter.isObjectParameter)(fromObject, 'fromObject, propertyNames', 'toObject')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyNames = _fromObject.propertyNames;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyNames, 'propertyNames', 'toObject')) {
    var _propertyNames = propertyNames;
    propertyNames = _propertyNames.propertyNames;
    var _propertyNames$toObje = _propertyNames.toObject;
    toObject = _propertyNames$toObje === void 0 ? {} : _propertyNames$toObje;
  } else if ((0, _isObjectParameter.isObjectParameter)(toObject, 'toObject')) {
    var _toObject = toObject;
    toObject = _toObject.toObject;
  }

  if (!(0, _type.isObject)(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!((0, _type.isString)(propertyNames) || isStringArray(propertyNames))) {
    throw new TypeError('copyProperty args(propertyNames) is not [array|string]');
  }

  if (!(0, _type.isObject)(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  return (0, _copyProperty2._copyProperty)(fromObject, propertyNames, toObject);
};

exports.copyProperty = copyProperty;
var copyProp = copyProperty;
exports.copyProp = copyProp;
var _default = {
  copyProperty: copyProperty,
  copyProp: copyProp
};
exports["default"] = _default;
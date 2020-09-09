"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setProp = exports.copyProp = exports.setProperty = exports._setProperty = exports.copyProperty = exports._copyProperty = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _splitCommaItems2 = require("../string/splitCommaItems.js");

var _includes = require("../compare/__includes.js");

/**
 * copyProperty
 */
var _copyProperty = function _copyProperty(fromObject, propertyNames) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _type.isString)(propertyNames)) {
    propertyNames = (0, _splitCommaItems2._splitCommaItems)(propertyNames);
  } else {
    if ((0, _includes.__includes)(propertyNames, '')) {
      throw new Error('_copyProperty args(propertyNames) element is not empty string');
    }
  }

  for (var i = 0; i < propertyNames.length; i += 1) {
    toObject[propertyNames[i]] = fromObject[propertyNames[i]];
  }

  return toObject;
};

exports._copyProperty = _copyProperty;

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

  return _copyProperty(fromObject, propertyNames, toObject);
};
/**
 * setProperty
 */


exports.copyProperty = copyProperty;

var _setProperty = function _setProperty(object, propertyPath, value) {
  var propertyArray = propertyPath.split('.');

  for (var i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '') {
      throw new Error('setProperty args(propertyPath) is empty string');
    }
  }

  var result = object;

  for (var _i = 0, _l = propertyArray.length - 1; _i < _l; _i += 1) {
    if (!((0, _type.isObject)(result[propertyArray[_i]]) || (0, _type.isArraySeries)(result[propertyArray[_i]]))) {
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
    var _object = object;
    object = _object.object;
    propertyPath = _object.propertyPath;
    value = _object.value;
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
var setProp = setProperty;
exports.setProp = setProp;
var _default = {
  _copyProperty: _copyProperty,
  _setProperty: _setProperty,
  copyProperty: copyProperty,
  setProperty: setProperty,
  copyProp: copyProp,
  setProp: setProp
};
exports["default"] = _default;
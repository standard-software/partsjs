"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fixProp = exports.fixProperty = exports._fixProperty = void 0;

var _type = require("../type/type.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _hasOwn2 = require("../object/_hasOwn.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _splitCommaItems2 = require("../string/splitCommaItems.js");

var _includes = require("../compare/__includes.js");

/**
 * _fixProperty
 */
var _fixProperty = function _fixProperty(object, propertyNames) {
  if ((0, _type.isString)(propertyNames)) {
    propertyNames = (0, _splitCommaItems2._splitCommaItems)(propertyNames);
  } else {
    if ((0, _includes.__includes)(propertyNames, '')) {
      throw new Error('_fixProperty args(propertyNames) element is not empty string');
    }
  }

  for (var i = 0; i < propertyNames.length; i += 1) {
    var result = (0, _hasOwn2._hasOwn)(object, propertyNames[i]);

    if (result === false) {
      return false;
    }
  }

  return (0, _propertyCount2._propertyCount)(object) === propertyNames.length;
};
/**
 * fixProperty
 */


exports._fixProperty = _fixProperty;

var fixProperty = function fixProperty(object, propertyNames) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyNames')) {
    var _object = object;
    object = _object.object;
    propertyNames = _object.propertyNames;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyNames, 'propertyNames')) {
    var _propertyNames = propertyNames;
    propertyNames = _propertyNames.propertyNames;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('fixProperty args(object) is not objectLike');
  }

  if (!((0, _type.isString)(propertyNames) || (0, _type.isStringArray)(propertyNames))) {
    throw new TypeError('fixProperty args(propertyPaths) is not [string array|string]');
  }

  return _fixProperty(object, propertyNames);
};

exports.fixProperty = fixProperty;
var fixProp = fixProperty;
exports.fixProp = fixProp;
var _default = {
  _fixProperty: _fixProperty,
  fixProperty: fixProperty,
  fixProp: fixProp
};
exports["default"] = _default;
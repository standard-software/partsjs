"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._setProperty = void 0;

var _type = require("../type/type.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _splitCommaItems2 = require("../string/splitCommaItems.js");

var _splitDotItems2 = require("../string/splitDotItems.js");

var _includes = require("../compare/__includes.js");

var _string_common = require("../string/string_common.js");

/**
 * setProperty
 */
var _setProperty = function _setProperty(object, propertyPath, value) {
  var propertyArray = (0, _splitDotItems2._splitDotItems)(propertyPath);

  if (propertyArray.length === 0) {
    throw new Error('setProperty args(propertyPath) is empty string');
  }

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
var _default = {
  _setProperty: _setProperty
};
exports["default"] = _default;
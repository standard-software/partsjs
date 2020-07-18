"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.or = exports._or = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * or
 */
var _or = function _or(value, compareArray) {
  for (var i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }

  return false;
};

exports._or = _or;

var or = function or(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('or args(compareArray) is not array');
  }

  return _or(value, compareArray);
};

exports.or = or;
var _default = {
  _or: _or,
  or: or
};
exports["default"] = _default;
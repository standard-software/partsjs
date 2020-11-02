"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__clone = void 0;

var _isType = require("../type/isType.js");

var _returnValueFunction = require("../common/__returnValueFunction.js");

/**
 * clone
 */
var __clone = function __clone(source) {
  var __clone_ = function __clone_(value) {
    if ((0, _isType.isObject)(value)) {
      var cloneValue = {};

      for (var key in value) {
        cloneValue[key] = value[key];
      }

      return cloneValue;
    } else if ((0, _isType.isArray)(value)) {
      var _cloneValue = Array(value.length);

      for (var i = 0, l = value.length; i < l; i += 1) {
        _cloneValue[i] = value[i];
      }

      return _cloneValue;
    }

    return value;
  };

  return __clone_(source);
};

exports.__clone = __clone;
var _default = {
  __clone: __clone
};
exports["default"] = _default;
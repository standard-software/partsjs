"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__cloneDeep = void 0;

var _isType = require("../type/isType.js");

/**
 * cloneDeep
 */
var __cloneDeep = function __cloneDeep(source) {
  var __cloneDeep_ = function __cloneDeep_(value) {
    if ((0, _isType.isObject)(value)) {
      var cloneValue = {};

      for (var key in value) {
        cloneValue[key] = __cloneDeep_(value[key]);
      }

      return cloneValue;
    } else if ((0, _isType.isArray)(value)) {
      var _cloneValue = Array(value.length);

      for (var i = 0, l = value.length; i < l; i += 1) {
        _cloneValue[i] = __cloneDeep_(value[i]);
      }

      return _cloneValue;
    }

    return value;
  };

  return __cloneDeep_(source);
};

exports.__cloneDeep = __cloneDeep;
var _default = {
  __cloneDeep: __cloneDeep
};
exports["default"] = _default;
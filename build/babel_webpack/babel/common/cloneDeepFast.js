"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isType = require("../type/isType.js");

/**
 * cloneDeepFast
 */
var cloneDeepFast = function cloneDeepFast(source) {
  var __cloneDeepFast = function __cloneDeepFast(value) {
    var cloneValue;

    if ((0, _isType.isObject)(value)) {
      cloneValue = {};

      for (var key in value) {
        cloneValue[key] = __cloneDeepFast(value[key]);
      }

      return cloneValue;
    } else if ((0, _isType.isArray)(value)) {
      cloneValue = Array(value.length);

      for (var i = 0, l = value.length; i < l; i += 1) {
        cloneValue[i] = __cloneDeepFast(value[i]);
      }

      return cloneValue;
    }

    return value;
  };

  return __cloneDeepFast(source);
};

var _default = {
  cloneDeepFast: cloneDeepFast
};
exports["default"] = _default;
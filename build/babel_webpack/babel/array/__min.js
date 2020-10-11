"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__min = void 0;

var _isType = require("../type/isType.js");

/**
 * array.min
 */
var __min = function __min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!(0, _isType.isNumber)(array[i])) {
      throw new TypeError('__min args(array) element is not number');
    }

    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

exports.__min = __min;
var _default = {
  __min: __min
};
exports["default"] = _default;
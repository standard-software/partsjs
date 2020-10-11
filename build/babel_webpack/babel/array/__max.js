"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__max = void 0;

var _isType = require("../type/isType.js");

/**
 * array.max
 */
var __max = function __max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (!(0, _isType.isNumber)(array[i])) {
      throw new TypeError('__max args(array) element is not number');
    }

    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

exports.__max = __max;
var _default = {
  __max: __max
};
exports["default"] = _default;
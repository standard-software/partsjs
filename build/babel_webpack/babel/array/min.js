"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.min = void 0;

var _type = require("../type/type.js");

var _min2 = require("../array/_min.js");

/**
 * array.min
 */
var min = function min(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('min args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('min args(array) element is not number');
  }

  return (0, _min2._min)(array);
};

exports.min = min;
var _default = {
  min: min
};
exports["default"] = _default;
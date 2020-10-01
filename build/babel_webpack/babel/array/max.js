"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.max = void 0;

var _type = require("../type/type.js");

var _max2 = require("../array/_max.js");

/**
 * array.max
 */
var max = function max(array) {
  if (!(0, _type.isArray)(array)) {
    throw new TypeError('max args(array) is not array');
  }

  if (array.length !== 0 && !(0, _type.isNumberArray)(array)) {
    throw new TypeError('max args(array) element is not number');
  }

  return (0, _max2._max)(array);
};

exports.max = max;
var _default = {
  max: max
};
exports["default"] = _default;
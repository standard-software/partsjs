"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.functionValue = void 0;

var _type = require("../type/type.js");

/**
 * function Value
 */
var functionValue = function functionValue(value) {
  if ((0, _type.isFunction)(value)) {
    return value();
  } else {
    return value;
  }
};

exports.functionValue = functionValue;
var _default = {
  functionValue: functionValue
};
exports["default"] = _default;
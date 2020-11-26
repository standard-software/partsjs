"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isInvalidDate = void 0;

var _isType = require("../type/isType.js");

/**
 * isInvalidDate
 */
var isInvalidDate = function isInvalidDate(value) {
  return (0, _isType.isDate)(value) && (0, _isType.isNaNStrict)(value.getTime()); // WSH
  //  value.toString() !== 'Invalid Date'
};

exports.isInvalidDate = isInvalidDate;
var _default = {
  isInvalidDate: isInvalidDate
};
exports["default"] = _default;
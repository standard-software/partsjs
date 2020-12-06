"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isReferenceType = void 0;

var _isPrimitiveType = require("../type/isPrimitiveType.js");

/**
 * isPrimitiveType
 */
var isReferenceType = function isReferenceType(value) {
  return !(0, _isPrimitiveType.isPrimitiveType)(value);
};

exports.isReferenceType = isReferenceType;
var _default = {
  isReferenceType: isReferenceType
};
exports["default"] = _default;
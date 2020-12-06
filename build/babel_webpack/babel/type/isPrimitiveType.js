"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isPrimitiveType = void 0;

var _includes = require("../compare/__includes.js");

var _typeName = require("../type/typeName.js");

/**
 * isPrimitiveType
 */
var isPrimitiveType = function isPrimitiveType(value) {
  var name = (0, _typeName.typeName)(value);

  if ((0, _includes.__includes)(['Undefined', 'Null', 'Boolean', 'Number', 'NaN', 'Infinity', 'String', 'Symbol'], name)) {
    return true;
  }

  return false;
};

exports.isPrimitiveType = isPrimitiveType;
var _default = {
  isPrimitiveType: isPrimitiveType
};
exports["default"] = _default;
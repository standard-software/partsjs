"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakMap = exports.isNotMap = exports.isWeakMap = exports.isMap = void 0;

var _isType = require("../type/isType.js");

var _syntax = require("../syntax/syntax.js");

var isMap = function isMap(value) {
  if (!(0, _isType.isObjectLike)(value)) {
    return false;
  }

  if (!(0, _syntax.canUseMap)()) {
    return false;
  }

  return value.constructor === Map; // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object Map]'
  // already return false;
};

exports.isMap = isMap;

var isWeakMap = function isWeakMap(value) {
  if (!(0, _isType.isObjectLike)(value)) {
    return false;
  }

  if (!(0, _syntax.canUseMap)()) {
    return false;
  }

  return value.constructor === WeakMap; // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object WeakMap]'
  // already return false;
};

exports.isWeakMap = isWeakMap;

var isNotMap = function isNotMap(value) {
  return !isMap(value);
};

exports.isNotMap = isNotMap;

var isNotWeakMap = function isNotWeakMap(value) {
  return !isWeakMap(value);
};

exports.isNotWeakMap = isNotWeakMap;
var _default = {
  isMap: isMap,
  isNotMap: isNotMap,
  isWeakMap: isWeakMap,
  isNotWeakMap: isNotWeakMap
};
exports["default"] = _default;
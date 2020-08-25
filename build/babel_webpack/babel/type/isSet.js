"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotWeakSet = exports.isNotSet = exports.isWeakSet = exports.isSet = void 0;

var _isType = require("../type/isType.js");

var _canUseSet = require("../syntax/canUseSet.js");

var isSet = function isSet(value) {
  if (!(0, _isType.isObjectLike)(value)) {
    return false;
  }

  if (!(0, _canUseSet.canUseSet)()) {
    return false;
  }

  return value.constructor === Set; // IE11
  // Object.prototype.toString.call(new Map) is [object Object]
  // So
  //  objectToString(value) === '[object Set]'
  // already return false;
};

exports.isSet = isSet;

var isWeakSet = function isWeakSet(value) {
  return (0, _isType.objectToString)(value) === '[object WeakSet]';
};

exports.isWeakSet = isWeakSet;

var isNotSet = function isNotSet(value) {
  return !isSet(value);
};

exports.isNotSet = isNotSet;

var isNotWeakSet = function isNotWeakSet(value) {
  return !isWeakSet(value);
};

exports.isNotWeakSet = isNotWeakSet;
var _default = {
  isSet: isSet,
  isNotSet: isNotSet,
  isWeakSet: isWeakSet,
  isNotWeakSet: isNotWeakSet
};
exports["default"] = _default;
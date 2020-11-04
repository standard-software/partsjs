"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectToKeyValueArray = exports.objectEntries = void 0;

var _isType = require("../type/isType.js");

var _hasOwn2 = require("../object/_hasOwn.js");

var _objectEntries2 = require("../object/_objectEntries.js");

/**
 * objectEntries
 */
var objectEntries = function objectEntries(object) {
  if (!(0, _isType.isObjectLike)(object)) {
    throw new TypeError('objectEntries args(object) is not object');
  }

  return (0, _objectEntries2._objectEntries)(object);
};

exports.objectEntries = objectEntries;
var objectToKeyValueArray = objectEntries;
exports.objectToKeyValueArray = objectToKeyValueArray;
var _default = {
  objectEntries: objectEntries,
  objectToKeyValueArray: objectToKeyValueArray
};
exports["default"] = _default;
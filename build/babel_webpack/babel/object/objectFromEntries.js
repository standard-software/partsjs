"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.objectFromKeyValueArray = exports.objectFromEntries = void 0;

var _isType = require("../type/isType.js");

var _array_common = require("../array/array_common.js");

var _objectFromEntries2 = require("../object/_objectFromEntries.js");

/**
 * objectFromEntries
 */
var objectFromEntries = function objectFromEntries(entries) {
  if (!(0, _isType.isArray)(entries)) {
    throw new TypeError('objectFromEntries args(entriesArray) is not array');
  }

  if (!(entries.length === 0 || (0, _array_common._all)(entries, function (element) {
    return (0, _isType.isArray)(element) && element.length === 2;
  }))) {
    throw new TypeError('objectFromEntries args(entries) element is not array.length === 2');
  }

  return (0, _objectFromEntries2._objectFromEntries)(entries);
};

exports.objectFromEntries = objectFromEntries;
var objectFromKeyValueArray = objectFromEntries;
exports.objectFromKeyValueArray = objectFromKeyValueArray;
var _default = {
  objectFromEntries: objectFromEntries,
  objectFromKeyValueArray: objectFromKeyValueArray
};
exports["default"] = _default;
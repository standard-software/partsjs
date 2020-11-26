"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrayToIndexValueArray = exports.arrayEntries = void 0;

var _isType = require("../type/isType.js");

var _arrayEntries2 = require("../array/_arrayEntries.js");

/**
 * arrayEntries
 */
var arrayEntries = function arrayEntries(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('arrayEntries args(array) is not array');
  }

  return (0, _arrayEntries2._arrayEntries)(array);
};

exports.arrayEntries = arrayEntries;
var arrayToIndexValueArray = arrayEntries;
exports.arrayToIndexValueArray = arrayToIndexValueArray;
var _default = {
  arrayEntries: arrayEntries,
  arrayToIndexValueArray: arrayToIndexValueArray
};
exports["default"] = _default;
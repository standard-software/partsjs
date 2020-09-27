"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrayToIndexValueArray = exports.arrayEntries = exports._arrayEntries = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _NumberArray2 = require("../array/_NumberArray.js");

/**
 * arrayEntries
 */
var _arrayEntries = function _arrayEntries(array) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }

  return result;
};

exports._arrayEntries = _arrayEntries;

var arrayEntries = function arrayEntries(array) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array')) {
    var _array = array;
    array = _array.array;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('arrayEntries args(array) is not array');
  }

  return _arrayEntries(array);
};

exports.arrayEntries = arrayEntries;
var arrayToIndexValueArray = arrayEntries;
exports.arrayToIndexValueArray = arrayToIndexValueArray;
var _default = {
  _arrayEntries: _arrayEntries,
  arrayEntries: arrayEntries,
  arrayToIndexValueArray: arrayToIndexValueArray
};
exports["default"] = _default;
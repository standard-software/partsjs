"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arrayEntries = exports.arrayToIndexValueArray = exports._arrayToIndexValueArray = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _NumberArray2 = require("../array/NumberArray.js");

/**
 * arrayToIndexValueArray
 */
var _arrayToIndexValueArray = function _arrayToIndexValueArray(array) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }

  return result;
};

exports._arrayToIndexValueArray = _arrayToIndexValueArray;

var arrayToIndexValueArray = function arrayToIndexValueArray(array) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array')) {
    var _array = array;
    array = _array.array;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('arrayToIndexValueArray args(array) is not array');
  }

  return _arrayToIndexValueArray(array);
};

exports.arrayToIndexValueArray = arrayToIndexValueArray;
var arrayEntries = arrayToIndexValueArray;
exports.arrayEntries = arrayEntries;
var _default = {
  _arrayToIndexValueArray: _arrayToIndexValueArray,
  arrayToIndexValueArray: arrayToIndexValueArray,
  arrayEntries: arrayEntries
};
exports["default"] = _default;
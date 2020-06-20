"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchAll = exports._indexOfMatchAll = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _array_common = require("../array/array_common.js");

var _matchAll2 = require("../compare/matchAll.js");

/**
 * indexOfMatchAll
 */
var _indexOfMatchAll = function _indexOfMatchAll(valueArray, compareArray) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _matchAll2._matchAll)(value, compareArray);
  });
};

exports._indexOfMatchAll = _indexOfMatchAll;

var indexOfMatchAll = function indexOfMatchAll(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatchAll args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('indexOfMatchAll args(compareArray) is not array');
  }

  return _indexOfMatchAll(valueArray, compareArray);
};

exports.indexOfMatchAll = indexOfMatchAll;
var _default = {
  _indexOfMatchAll: _indexOfMatchAll,
  indexOfMatchAll: indexOfMatchAll
};
exports["default"] = _default;
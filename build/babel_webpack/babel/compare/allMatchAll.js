"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.allMatchAll = exports._allMatchAll = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _array_common = require("../array/array_common.js");

var _matchAll2 = require("../compare/matchAll.js");

/**
 * allMatchAll
 */
var _allMatchAll = function _allMatchAll(valueArray, compareArray) {
  return (0, _array_common._all)(valueArray, function (value) {
    return (0, _matchAll2._matchAll)(value, compareArray);
  });
};

exports._allMatchAll = _allMatchAll;

var allMatchAll = function allMatchAll(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('allMatchAll args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('allMatchAll args(compareArray) is not array');
  }

  return _allMatchAll(valueArray, compareArray);
};

exports.allMatchAll = allMatchAll;
var _default = {
  _allMatchAll: _allMatchAll,
  allMatchAll: allMatchAll
};
exports["default"] = _default;
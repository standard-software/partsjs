"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfMatchSome = exports._indexOfMatchSome = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _array_common = require("../array/array_common.js");

var _matchSome2 = require("../compare/matchSome.js");

/**
 * indexOfMatchSome
 */
var _indexOfMatchSome = function _indexOfMatchSome(valueArray, compareArray) {
  return (0, _array_common._findFirstIndex)(valueArray, function (value) {
    return (0, _matchSome2._matchSome)(value, compareArray);
  });
};

exports._indexOfMatchSome = _indexOfMatchSome;

var indexOfMatchSome = function indexOfMatchSome(valueArray, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(valueArray, 'valueArray, compareArray')) {
    var _valueArray = valueArray;
    valueArray = _valueArray.valueArray;
    compareArray = _valueArray.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(valueArray)) {
    throw new TypeError('indexOfMatchSome args(valueArray) is not array');
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('indexOfMatchSome args(compareArray) is not array');
  }

  return _indexOfMatchSome(valueArray, compareArray);
};

exports.indexOfMatchSome = indexOfMatchSome;
var _default = {
  _indexOfMatchSome: _indexOfMatchSome,
  indexOfMatchSome: indexOfMatchSome
};
exports["default"] = _default;
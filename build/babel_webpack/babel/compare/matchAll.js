"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAll = exports._matchAll = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _array_common = require("../array/array_common.js");

var _match2 = require("../compare/match.js");

/**
 * matchAll
 */
var _matchAll = function _matchAll(value, compareArray) {
  return (0, _array_common._all)(compareArray, function (compare) {
    return (0, _match2._match)(value, compare);
  });
};

exports._matchAll = _matchAll;

var matchAll = function matchAll(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchAll args(compareArray) is not array');
  }

  return _matchAll(value, compareArray);
};

exports.matchAll = matchAll;
var _default = {
  _matchAll: _matchAll,
  matchAll: matchAll
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchSome = exports._matchSome = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _array_common = require("../array/array_common.js");

var _match2 = require("../compare/match.js");

/**
 * matchSome
 */
var _matchSome = function _matchSome(value, compareArray) {
  return (0, _array_common._some)(compareArray, function (compare) {
    return (0, _match2._match)(value, compare);
  });
};

exports._matchSome = _matchSome;

var matchSome = function matchSome(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchSome args(compareArray) is not array');
  }

  return _matchSome(value, compareArray);
};

exports.matchSome = matchSome;
var _default = {
  _matchSome: _matchSome,
  matchSome: matchSome
};
exports["default"] = _default;
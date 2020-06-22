"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchAllValue = exports._matchAllValue = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _matchAll2 = require("../compare/matchAll.js");

/**
 * matchAllValue
 */
var _matchAllValue = function _matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _matchAll2._matchAll)(value, compareArray)) {
    if ((0, _type.isFunction)(match)) {
      return match(value);
    }

    return match;
  }

  if ((0, _type.isFunction)(unmatch)) {
    return unmatch(value);
  }

  return unmatch;
};

exports._matchAllValue = _matchAllValue;

var matchAllValue = function matchAllValue(value, compareArray, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compareArray, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray, match', 'unmatch')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
    match = _compareArray.match;
    var _compareArray$unmatch = _compareArray.unmatch;
    unmatch = _compareArray$unmatch === void 0 ? value : _compareArray$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match = match;
    match = _match.match;
    var _match$unmatch = _match.unmatch;
    unmatch = _match$unmatch === void 0 ? value : _match$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('matchAllValue args(compareArray) is not array');
  }

  return _matchAllValue(value, compareArray, match, unmatch);
};

exports.matchAllValue = matchAllValue;
var _default = {
  _matchAllValue: _matchAllValue,
  matchAllValue: matchAllValue
};
exports["default"] = _default;
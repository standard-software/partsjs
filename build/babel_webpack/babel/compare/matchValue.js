"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.matchValue = exports._matchValue = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _match3 = require("../compare/match.js");

/**
 * matchValue
 */
var _matchValue = function _matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _match3._match)(value, compare)) {
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

exports._matchValue = _matchValue;

var matchValue = function matchValue(value, compare, match) {
  var unmatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : value;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare, match', 'unmatch')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
    match = _value.match;
    var _value$unmatch = _value.unmatch;
    unmatch = _value$unmatch === void 0 ? value : _value$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare, match', 'unmatch')) {
    var _compare = compare;
    compare = _compare.compare;
    match = _compare.match;
    var _compare$unmatch = _compare.unmatch;
    unmatch = _compare$unmatch === void 0 ? value : _compare$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'unmatch')) {
    var _match2 = match;
    match = _match2.match;
    var _match2$unmatch = _match2.unmatch;
    unmatch = _match2$unmatch === void 0 ? value : _match2$unmatch;
  } else if ((0, _isObjectParameter.isObjectParameter)(unmatch, 'unmatch')) {
    var _unmatch = unmatch;
    unmatch = _unmatch.unmatch;
  }

  return _matchValue(value, compare, match, unmatch);
};

exports.matchValue = matchValue;
var _default = {
  _matchValue: _matchValue,
  matchValue: matchValue
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialValue = exports._initialValue = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _matchSomeValue2 = require("../compare/matchSomeValue.js");

/**
 * initialValue
 */
var _initialValue = function _initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];
  return (0, _matchSomeValue2._matchSomeValue)(value, compareArray, match);
};

exports._initialValue = _initialValue;

var initialValue = function initialValue(value, match) {
  var compareArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [undefined];

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, match', 'compareArray')) {
    var _value = value;
    value = _value.value;
    match = _value.match;
    var _value$compareArray = _value.compareArray;
    compareArray = _value$compareArray === void 0 ? [undefined] : _value$compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(match, 'match', 'compareArray')) {
    var _match = match;
    match = _match.match;
    var _match$compareArray = _match.compareArray;
    compareArray = _match$compareArray === void 0 ? [undefined] : _match$compareArray;
  } else if ((0, _isObjectParameter.isObjectParameter)(compareArray, 'compareArray')) {
    var _compareArray = compareArray;
    compareArray = _compareArray.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('initialValue args(compareArray) is not array');
  }

  return _initialValue(value, match, compareArray);
};

exports.initialValue = initialValue;
var _default = {
  _initialValue: _initialValue,
  initialValue: initialValue
};
exports["default"] = _default;
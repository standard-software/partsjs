"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.roundDown = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _roundDown2 = require("../number/_roundDown.js");

/**
 * roundDown
 */
var roundDown = function roundDown(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  } else if ((0, _isObjectParameter.isObjectParameter)(digit, 'digit')) {
    var _digit = digit;
    digit = _digit.digit;
  }

  if (!(0, _isType.isNumber)(value)) {
    throw new TypeError('roundDown args(value) is not number');
  }

  if (!(0, _isType.isInteger)(digit)) {
    throw new TypeError('roundDown args(digit) is not integer');
  }

  return (0, _roundDown2._roundDown)(value, digit);
};

exports.roundDown = roundDown;
var _default = {
  roundDown: roundDown
};
exports["default"] = _default;
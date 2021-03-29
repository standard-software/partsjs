"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.round = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _round2 = require("../number/_round.js");

/**
 * round
 */
var round = function round(value) {
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
    throw new TypeError('round args(value) is not number');
  }

  if (!(0, _isType.isInteger)(digit)) {
    throw new TypeError('round args(digit) is not integer');
  }

  return (0, _round2._round)(value, digit);
};

exports.round = round;
var _default = {
  round: round
};
exports["default"] = _default;
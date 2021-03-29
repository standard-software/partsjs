"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._round = void 0;

/**
 * round
 */
var _round = function _round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

exports._round = _round;
var _default = {
  _round: _round
};
exports["default"] = _default;
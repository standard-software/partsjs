"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._roundDown = void 0;

/**
 * roundDown
 */
var _roundDown = function _roundDown(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.floor(value * powResult) / powResult;
  } else {
    return -1 * Math.floor(-1 * value * powResult) / powResult;
  }
};

exports._roundDown = _roundDown;
var _default = {
  _roundDown: _roundDown
};
exports["default"] = _default;
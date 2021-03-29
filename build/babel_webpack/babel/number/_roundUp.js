"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._roundUp = void 0;

/**
 * roundUp
 */
var _roundUp = function _roundUp(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.ceil(value * powResult) / powResult;
  } else {
    return -1 * Math.ceil(-1 * value * powResult) / powResult;
  }
};

exports._roundUp = _roundUp;
var _default = {
  _roundUp: _roundUp
};
exports["default"] = _default;
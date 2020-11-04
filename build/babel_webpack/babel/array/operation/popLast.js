"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popLast = void 0;

var _isType = require("../../type/isType.js");

var _popLast2 = require("./_popLast.js");

/**
 * array.operation.popLast
 */
var popLast = function popLast(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popLast args(array) is not array');
  }

  return (0, _popLast2._popLast)(array);
};

exports.popLast = popLast;
var _default = {
  popLast: popLast
};
exports["default"] = _default;
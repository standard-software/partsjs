"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popFirst = void 0;

var _isType = require("../../type/isType.js");

var _popFirst2 = require("./_popFirst.js");

/**
 * array.operation.popFirst
 */
var popFirst = function popFirst(array) {
  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popFirst args(array) is not array');
  }

  return (0, _popFirst2._popFirst)(array);
};

exports.popFirst = popFirst;
var _default = {
  popFirst: popFirst
};
exports["default"] = _default;
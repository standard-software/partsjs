"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._IntegerArray = void 0;

var _type = require("../type/type.js");

var _NumberArray2 = require("../array/_NumberArray.js");

/**
 * IntegerArray
 */
var _IntegerArray = function _IntegerArray(start, end, increment) {
  return (0, _NumberArray2._NumberArray)(start, end, increment);
};

exports._IntegerArray = _IntegerArray;
var _default = {
  _IntegerArray: _IntegerArray
};
exports["default"] = _default;
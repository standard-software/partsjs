"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._loop = void 0;

var _type = require("../type/type.js");

var _loop2 = require("../syntax/__loop.js");

var _IntegerArray2 = require("../array/_IntegerArray.js");

/**
 * loop
 */
var _loop = function _loop(start, end, increment) {
  return (0, _loop2.__loop)((0, _IntegerArray2._IntegerArray)(start, end, increment));
};

exports._loop = _loop;
var _default = {
  loop: loop
};
exports["default"] = _default;
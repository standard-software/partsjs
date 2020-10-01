"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfLast = void 0;

var _array = require("../array/array.js");

/**
 * indexOfLast
 */
var _indexOfLast = function _indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if (search === '') {
    return -1;
  }

  return str.lastIndexOf(search, indexStart);
};

exports._indexOfLast = _indexOfLast;
var _default = {
  _indexOfLast: _indexOfLast
};
exports["default"] = _default;
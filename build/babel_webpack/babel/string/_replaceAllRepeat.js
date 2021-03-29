"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._replaceAllRepeat = void 0;

var _includes = require("../compare/__includes.js");

var _replaceAll2 = require("../string/_replaceAll.js");

/**
 * replaceAllRepeat
 */
var _replaceAllRepeat = function _replaceAllRepeat(str, before, after) {
  var maxCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var result = str;

  if (before === '') {
    return result;
  }

  if (maxCount <= 0) {
    maxCount = Infinity;
  }

  var count = 0;

  while ((0, _includes.__includes)(result, before)) {
    result = (0, _replaceAll2._replaceAll)(result, before, after);
    count += 1;

    if (maxCount <= count) {
      break;
    }
  }

  return result;
};

exports._replaceAllRepeat = _replaceAllRepeat;
var _default = {
  _replaceAllRepeat: _replaceAllRepeat
};
exports["default"] = _default;
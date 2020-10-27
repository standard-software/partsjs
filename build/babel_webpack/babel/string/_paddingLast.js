"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._paddingLast = void 0;

var _string_common = require("../string/string_common.js");

/**
 * paddingLast
 */
var _paddingLast = function _paddingLast(str, length, fill) {
  if (length <= str.length) {
    return str;
  }

  var result = str + (0, _string_common._repeat)(fill, length);
  return (0, _string_common._subFirst)(result, length);
};

exports._paddingLast = _paddingLast;
var _default = {
  _paddingLast: _paddingLast
};
exports["default"] = _default;
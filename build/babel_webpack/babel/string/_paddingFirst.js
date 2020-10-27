"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._paddingFirst = void 0;

var _string_common = require("../string/string_common.js");

/**
 * paddingFirst
 */
var _paddingFirst = function _paddingFirst(str, length, fill) {
  if (length <= str.length) {
    return str;
  }

  var result = (0, _string_common._repeat)(fill, length) + str;
  return (0, _string_common._subLast)(result, length);
};

exports._paddingFirst = _paddingFirst;
var _default = {
  _paddingFirst: _paddingFirst
};
exports["default"] = _default;
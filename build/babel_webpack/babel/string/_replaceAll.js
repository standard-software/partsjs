"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._replaceAll = void 0;

var _replaceAll = function _replaceAll(str, before, after) {
  return str.split(before).join(after);
};

exports._replaceAll = _replaceAll;
var _default = {
  _replaceAll: _replaceAll
};
exports["default"] = _default;
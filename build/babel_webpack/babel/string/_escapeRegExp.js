"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._escapeRegExp = void 0;

/**
 * escapeRegExp
 */
var _escapeRegExp = function _escapeRegExp(str) {
  return str.replace(/[\\^$.*+-?(){}[\]\|\/]/g, '\\$&');
};

exports._escapeRegExp = _escapeRegExp;
var _default = {
  _escapeRegExp: _escapeRegExp
};
exports["default"] = _default;
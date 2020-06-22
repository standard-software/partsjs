"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatch = exports._someMatch = void 0;

var _indexOfMatch2 = require("../compare/indexOfMatch.js");

/**
 * someMatch
 */
var _someMatch = function _someMatch(valueArray, compare) {
  return (0, _indexOfMatch2._indexOfMatch)(valueArray, compare) !== -1;
};

exports._someMatch = _someMatch;

var someMatch = function someMatch(valueArray, compare) {
  return (0, _indexOfMatch2.indexOfMatch)(valueArray, compare) !== -1;
};

exports.someMatch = someMatch;
var _default = {
  _someMatch: _someMatch,
  someMatch: someMatch
};
exports["default"] = _default;
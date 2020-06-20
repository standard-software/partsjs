"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.someMatchSome = exports._someMatchSome = void 0;

var _indexOfMatchSome2 = require("../compare/indexOfMatchSome.js");

/**
 * someMatchSome
 */
var _someMatchSome = function _someMatchSome(valueArray, compareArray) {
  return (0, _indexOfMatchSome2._indexOfMatchSome)(valueArray, compareArray) !== -1;
};

exports._someMatchSome = _someMatchSome;

var someMatchSome = function someMatchSome(valueArray, compareArray) {
  return (0, _indexOfMatchSome2.indexOfMatchSome)(valueArray, compareArray) !== -1;
};

exports.someMatchSome = someMatchSome;
var _default = {
  _someMatchSome: _someMatchSome,
  someMatchSome: someMatchSome
};
exports["default"] = _default;
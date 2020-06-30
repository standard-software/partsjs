"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotSymbol = exports.isSymbol = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isSymbol = function isSymbol(value) {
  return _typeof(value) === 'symbol';
};

exports.isSymbol = isSymbol;

var isNotSymbol = function isNotSymbol(value) {
  return !isSymbol(value);
};

exports.isNotSymbol = isNotSymbol;
var _default = {
  isSymbol: isSymbol,
  isNotSymbol: isNotSymbol
};
exports["default"] = _default;
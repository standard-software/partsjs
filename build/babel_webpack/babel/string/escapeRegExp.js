"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.escapeRegExp = void 0;

var _type = require("../type/type.js");

var _escapeRegExp2 = require("./_escapeRegExp.js");

/**
 * escapeRegExp
 */
var escapeRegExp = function escapeRegExp(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('escapeRegExp args(str) is not string');
  }

  return (0, _escapeRegExp2._escapeRegExp)(str);
};

exports.escapeRegExp = escapeRegExp;
var _default = {
  escapeRegExp: escapeRegExp
};
exports["default"] = _default;
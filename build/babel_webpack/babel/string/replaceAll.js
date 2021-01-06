"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAll = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _replaceAll2 = require("../string/_replaceAll.js");

/**
 * replaceAll
 */
var replaceAll = function replaceAll(str, before, after) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, before, after')) {
    var _str = str;
    str = _str.str;
    before = _str.before;
    after = _str.after;
  } else if ((0, _isObjectParameter.isObjectParameter)(before, 'before, after')) {
    var _before = before;
    before = _before.before;
    after = _before.after;
  } else if ((0, _isObjectParameter.isObjectParameter)(after, 'after')) {
    var _after = after;
    after = _after.after;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError("replaceAll args(str:".concat(str, ") is not string"));
  }

  if (str === '') {
    throw new TypeError("replaceAll args(str) is empty string");
  }

  if (!(0, _type.isString)(before)) {
    throw new TypeError("replaceAll args(before:".concat(before, ") is not string"));
  }

  if (before === '') {
    throw new TypeError("replaceAll args(before) is empty string");
  }

  if (!(0, _type.isString)(after)) {
    throw new TypeError("replaceAll args(after:".concat(after, ") is not string"));
  }

  return (0, _replaceAll2._replaceAll)(str, before, after);
};

exports.replaceAll = replaceAll;
var _default = {
  replaceAll: replaceAll
};
exports["default"] = _default;
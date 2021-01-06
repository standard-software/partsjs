"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAllRepeat = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _includes = require("../compare/__includes.js");

var _replaceAllRepeat2 = require("../string/_replaceAllRepeat.js");

/**
 * replaceAllRepeat
 */
var replaceAllRepeat = function replaceAllRepeat(str, before, after) {
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
    throw new TypeError("replaceAllRepeat args(str:".concat(str, ") is not string"));
  }

  if (str === '') {
    throw new TypeError('replaceAllRepeat args(str) is empty string');
  }

  if (!(0, _type.isString)(before)) {
    throw new TypeError("replaceAllRepeat args(before:".concat(before, ") is not string"));
  }

  if (before === '') {
    throw new TypeError('replaceAllRepeat args(before) is empty string');
  }

  if (!(0, _type.isString)(after)) {
    throw new TypeError("replaceAllRepeat args(after:".concat(after, ") is not string"));
  }

  if ((0, _includes.__includes)(after, before)) {
    throw new TypeError('replaceAllRepeat args(before) is includes args(after)');
  }

  return (0, _replaceAllRepeat2._replaceAllRepeat)(str, before, after);
};

exports.replaceAllRepeat = replaceAllRepeat;
var _default = {
  replaceAllRepeat: replaceAllRepeat
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.paddingLast = void 0;

var _isObjectParameter = require("../object/isObjectParameter.js");

var _isType = require("../type/isType.js");

var _paddingLast2 = require("../string/_paddingLast.js");

/**
 * paddingLast
 */
var paddingLast = function paddingLast(str, length, fill) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, length, fill')) {
    var _str = str;
    str = _str.str;
    length = _str.length;
    fill = _str.fill;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length, fill')) {
    var _length = length;
    length = _length.length;
    fill = _length.fill;
  } else if ((0, _isObjectParameter.isObjectParameter)(fill, 'fill')) {
    var _fill = fill;
    fill = _fill.fill;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('paddingLast args(str) is not string');
  }

  if (!((0, _isType.isInteger)(length) && 1 <= length)) {
    throw new TypeError('paddingLast args(length) is not integer >= 1');
  }

  if (!(0, _isType.isString)(fill)) {
    throw new TypeError('paddingLast args(fill) is not string');
  }

  return (0, _paddingLast2._paddingLast)(str, length, fill);
};

exports.paddingLast = paddingLast;
var _default = {
  paddingLast: paddingLast
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.paddingFirst = void 0;

var _isObjectParameter = require("../object/isObjectParameter.js");

var _isType = require("../type/isType.js");

var _paddingFirst2 = require("../string/_paddingFirst.js");

/**
 * paddingFirst
 */
var paddingFirst = function paddingFirst(str, length, fill) {
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
    throw new TypeError('paddingFirst args(str) is not string');
  }

  if (!((0, _isType.isInteger)(length) && 1 <= length)) {
    throw new TypeError('paddingFirst args(length) is not integer >= 1');
  }

  if (!(0, _isType.isString)(fill)) {
    throw new TypeError('paddingFirst args(fill) is not string');
  }

  return (0, _paddingFirst2._paddingFirst)(str, length, fill);
};

exports.paddingFirst = paddingFirst;
var _default = {
  paddingFirst: paddingFirst
};
exports["default"] = _default;
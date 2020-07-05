"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subFirstDelimLast = exports._subFirstDelimLast = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _subFirstDelimLast = function _subFirstDelimLast(str, delimiter) {
  var index = (0, _string._indexOfLast)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subIndex)(str, 0, index - 1);
  }
};

exports._subFirstDelimLast = _subFirstDelimLast;

var subFirstDelimLast = function subFirstDelimLast(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subFirstDelimLast args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subFirstDelimLast args(delimiter) is not string');
  }

  return _subFirstDelimLast(str, delimiter);
};

exports.subFirstDelimLast = subFirstDelimLast;
var _default = {
  _subFirstDelimLast: _subFirstDelimLast,
  subFirstDelimLast: subFirstDelimLast
};
exports["default"] = _default;
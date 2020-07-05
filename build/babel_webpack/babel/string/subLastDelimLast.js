"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLastDelimLast = exports._subLastDelimLast = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _subLastDelimLast = function _subLastDelimLast(str, delimiter) {
  var index = (0, _string._indexOfLast)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subLength)(str, index + delimiter.length);
  }
};

exports._subLastDelimLast = _subLastDelimLast;

var subLastDelimLast = function subLastDelimLast(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subLastDelimLast args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subLastDelimLast args(delimiter) is not string');
  }

  return _subLastDelimLast(str, delimiter);
};

exports.subLastDelimLast = subLastDelimLast;
var _default = {
  _subLastDelimLast: _subLastDelimLast,
  subLastDelimLast: subLastDelimLast
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subFirstDelimFirst = exports._subFirstDelimFirst = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _subFirstDelimFirst = function _subFirstDelimFirst(str, delimiter) {
  var index = (0, _string._indexOfFirst)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subIndex)(str, 0, index - 1);
  }
};

exports._subFirstDelimFirst = _subFirstDelimFirst;

var subFirstDelimFirst = function subFirstDelimFirst(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subFirstDelimFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subFirstDelimFirst args(delimiter) is not string');
  }

  return _subFirstDelimFirst(str, delimiter);
};

exports.subFirstDelimFirst = subFirstDelimFirst;
var _default = {
  _subFirstDelimFirst: _subFirstDelimFirst,
  subFirstDelimFirst: subFirstDelimFirst
};
exports["default"] = _default;
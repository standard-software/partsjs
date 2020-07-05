"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subLastDelimFirst = exports._subLastDelimFirst = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _subLastDelimFirst = function _subLastDelimFirst(str, delimiter) {
  var index = (0, _string._indexOfFirst)(str, delimiter);

  if (index === -1) {
    return '';
  } else {
    return (0, _string._subLength)(str, index + delimiter.length);
  }
};

exports._subLastDelimFirst = _subLastDelimFirst;

var subLastDelimFirst = function subLastDelimFirst(str, delimiter) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, delimiter')) {
    var _str = str;
    str = _str.str;
    delimiter = _str.delimiter;
  } else if ((0, _isObjectParameter.isObjectParameter)(delimiter, 'delimiter')) {
    var _delimiter = delimiter;
    delimiter = _delimiter.delimiter;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('subLastDelimFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(delimiter)) {
    throw new TypeError('subLastDelimFirst args(delimiter) is not string');
  }

  return _subLastDelimFirst(str, delimiter);
};

exports.subLastDelimFirst = subLastDelimFirst;
var _default = {
  _subLastDelimFirst: _subLastDelimFirst,
  subLastDelimFirst: subLastDelimFirst
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterFirst = exports._tagOuterFirst = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _tagOuterFirst = function _tagOuterFirst(str, startTag, endTag) {
  if (str === '') {
    return '';
  }

  var indexStartTag = (0, _string._indexOfFirst)(str, startTag);

  if (indexStartTag === -1) {
    return '';
  }

  var indexEndTag = (0, _string._indexOfFirst)(str, endTag, indexStartTag + startTag.length);

  if (indexEndTag === -1) {
    return '';
  }

  indexStartTag = (0, _string._indexOfLast)(str, startTag, indexEndTag - startTag.length);

  if (indexStartTag === -1) {
    return '';
  }

  return (0, _string._subIndex)(str, indexStartTag, indexEndTag + endTag.length - 1);
};

exports._tagOuterFirst = _tagOuterFirst;

var tagOuterFirst = function tagOuterFirst(str, startTag, endTag) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, startTag, endTag')) {
    var _str = str;
    str = _str.str;
    startTag = _str.startTag;
    endTag = _str.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(startTag, 'startTag, endTag')) {
    var _startTag = startTag;
    startTag = _startTag.startTag;
    endTag = _startTag.endTag;
  } else if ((0, _isObjectParameter.isObjectParameter)(endTag, 'endTag')) {
    var _endTag = endTag;
    endTag = _endTag.endTag;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('tagOuterFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagOuterFirst args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagOuterFirst args(endTag) is not string');
  }

  return _tagOuterFirst(str, startTag, endTag);
};

exports.tagOuterFirst = tagOuterFirst;
var _default = {
  _tagOuterFirst: _tagOuterFirst,
  tagOuterFirst: tagOuterFirst
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagInnerFirst = exports._tagInnerFirst = exports._tagInnerFirstBase = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _tagInnerFirstBase = function _tagInnerFirstBase(str, startTag, endTag) {
  if (str === '') {
    return {
      find: false,
      value: ''
    };
  }

  var indexStartTag = (0, _string._indexOfFirst)(str, startTag);

  if (indexStartTag === -1) {
    return {
      find: false,
      value: ''
    };
  }

  var indexEndTag = (0, _string._indexOfFirst)(str, endTag, indexStartTag + startTag.length);

  if (indexEndTag === -1) {
    return {
      find: false,
      value: ''
    };
  }

  indexStartTag = (0, _string._indexOfLast)(str, startTag, indexEndTag - startTag.length);

  if (indexStartTag === -1) {
    return {
      find: false,
      value: ''
    };
  }

  return {
    find: true,
    value: (0, _string._subIndex)(str, indexStartTag + startTag.length, indexEndTag - 1)
  };
};

exports._tagInnerFirstBase = _tagInnerFirstBase;

var _tagInnerFirst = function _tagInnerFirst(str, startTag, endTag) {
  var result = _tagInnerFirstBase(str, startTag, endTag);

  return result.value;
};

exports._tagInnerFirst = _tagInnerFirst;

var tagInnerFirst = function tagInnerFirst(str, startTag, endTag) {
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
    throw new TypeError('tagInnerFirst args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagInnerFirst args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagInnerFirst args(endTag) is not string');
  }

  return _tagInnerFirst(str, startTag, endTag);
};

exports.tagInnerFirst = tagInnerFirst;
var _default = {
  _tagInnerFirstBase: _tagInnerFirstBase,
  _tagInnerFirst: _tagInnerFirst,
  tagInnerFirst: tagInnerFirst
};
exports["default"] = _default;
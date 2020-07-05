"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagInnerLast = exports._tagInnerLast = exports._tagInnerLastBase = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _tagInnerLastBase = function _tagInnerLastBase(str, startTag, endTag) {
  if (str === '') {
    return {
      find: false,
      value: ''
    };
  }

  var indexEndTag = (0, _string._indexOfLast)(str, endTag);

  if (indexEndTag === -1) {
    return {
      find: false,
      value: ''
    };
  }

  var indexStartTag = (0, _string._indexOfLast)(str, startTag, indexEndTag - startTag.length);

  if (indexStartTag === -1) {
    return {
      find: false,
      value: ''
    };
  }

  indexEndTag = (0, _string._indexOfFirst)(str, endTag, indexStartTag + startTag.length);

  if (indexEndTag === -1) {
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

exports._tagInnerLastBase = _tagInnerLastBase;

var _tagInnerLast = function _tagInnerLast(str, startTag, endTag) {
  var result = _tagInnerLastBase(str, startTag, endTag);

  return result.value;
};

exports._tagInnerLast = _tagInnerLast;

var tagInnerLast = function tagInnerLast(str, startTag, endTag) {
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
    throw new TypeError('tagInnerLast args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagInnerLast args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagInnerLast args(endTag) is not string');
  }

  return _tagInnerLast(str, startTag, endTag);
};

exports.tagInnerLast = tagInnerLast;
var _default = {
  _tagInnerLastBase: _tagInnerLastBase,
  _tagInnerLast: _tagInnerLast,
  tagInnerLast: tagInnerLast
};
exports["default"] = _default;
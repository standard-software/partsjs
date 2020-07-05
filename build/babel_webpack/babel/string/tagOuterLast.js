"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tagOuterLast = exports._tagOuterLast = void 0;

var _isType = require("../type/isType.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _tagInnerLast = require("./tagInnerLast.js");

var _tagOuterLast = function _tagOuterLast(str, startTag, endTag) {
  var result = (0, _tagInnerLast._tagInnerLastBase)(str, startTag, endTag);

  if (!result.find) {
    return '';
  }

  return startTag + result.value + endTag;
};

exports._tagOuterLast = _tagOuterLast;

var tagOuterLast = function tagOuterLast(str, startTag, endTag) {
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
    throw new TypeError('tagOuterLast args(str) is not string');
  }

  if (!(0, _isType.isString)(startTag)) {
    throw new TypeError('tagOuterLast args(startTag) is not string');
  }

  if (!(0, _isType.isString)(endTag)) {
    throw new TypeError('tagOuterLast args(endTag) is not string');
  }

  return _tagOuterLast(str, startTag, endTag);
};

exports.tagOuterLast = tagOuterLast;
var _default = {
  _tagOuterLast: _tagOuterLast,
  tagOuterLast: tagOuterLast
};
exports["default"] = _default;
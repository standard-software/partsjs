"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.splitCommaItems = exports._splitCommaItems = void 0;

var _type = require("../type/type.js");

var _split = require("./split.js");

var _string_common = require("../string/string_common.js");

var _includes = require("../compare/__includes.js");

var _splitCommaItems = function _splitCommaItems(str) {
  if ((0, _string_common._trimBothEnds)(str) === '') {
    return [];
  }

  var result = (0, _split.split)(str, ',', _split.split.excludeEmptyStr.last, _split.split.excludeSpace.trim);

  if ((0, _includes.__includes)(result, '')) {
    throw new Error('_splitCommaItems args(str) is not correct format');
  }

  return result;
};

exports._splitCommaItems = _splitCommaItems;

var splitCommaItems = function splitCommaItems(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('splitCommaItems args(str) is not string');
  }

  return _splitCommaItems(str);
};

exports.splitCommaItems = splitCommaItems;
var _default = {
  _splitCommaItems: _splitCommaItems,
  splitCommaItems: splitCommaItems
};
exports["default"] = _default;
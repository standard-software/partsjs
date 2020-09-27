"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.splitDotItems = exports._splitDotItems = void 0;

var _type = require("../type/type.js");

var _split2 = require("./_split.js");

var _includes = require("../compare/__includes.js");

var _splitDotItems = function _splitDotItems(str) {
  if (str === '') {
    return [];
  }

  var result = (0, _split2._split)(str, '.', _split2._split.excludeEmptyStr.first, _split2._split.executeConvert.none);

  if ((0, _includes.__includes)(result, '')) {
    throw new Error("_splitDotItems args(str:".concat(str, ") is not correct format"));
  }

  return result;
};

exports._splitDotItems = _splitDotItems;

var splitDotItems = function splitDotItems(str) {
  if (!(0, _type.isString)(str)) {
    throw new TypeError('splitDotItems args(str) is not string');
  }

  return _splitDotItems(str);
};

exports.splitDotItems = splitDotItems;
var _default = {
  _splitDotItems: _splitDotItems,
  splitDotItems: splitDotItems
};
exports["default"] = _default;
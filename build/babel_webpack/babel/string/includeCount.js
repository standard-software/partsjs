"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includeCount = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _includeCount2 = require("../string/_includeCount.js");

/**
 * includeCount
 */
var includeCount = function includeCount(str, search) {
  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
  } else if ((0, _isObjectParameter.isObjectParameter)(search, 'search')) {
    var _search = search;
    search = _search.search;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError("includeCount args(str:".concat(str, ") is not string"));
  }

  if (!(0, _isType.isString)(search)) {
    throw new TypeError("includeCount args(search:".concat(search, ") is not string"));
  }

  return (0, _includeCount2._includeCount)(str, search);
};

exports.includeCount = includeCount;
var _default = {
  includeCount: includeCount
};
exports["default"] = _default;
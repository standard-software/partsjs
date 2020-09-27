"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.split = void 0;

var _type = require("../type/type.js");

var _Enum2 = require("../syntax/_Enum.js");

var _loop = require("../syntax/loop.js");

var _array_operation = require("../array/array_operation.js");

var _array_common = require("../array/array_common.js");

var _string_common = require("../string/string_common.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _or2 = require("../compare/or.js");

var _objectValues2 = require("../object/objectValues.js");

var _split2 = require("../string/_split.js");

/**
 * split
 */
var split = function split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : split.excludeEmptyStr.none;
  var executeConvert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : split.executeConvert.none;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, separator', 'excludeEmptyStr, executeConvert')) {
    var _str = str;
    str = _str.str;
    separator = _str.separator;
    var _str$excludeEmptyStr = _str.excludeEmptyStr;
    excludeEmptyStr = _str$excludeEmptyStr === void 0 ? split.excludeEmptyStr.none : _str$excludeEmptyStr;
    var _str$executeConvert = _str.executeConvert;
    executeConvert = _str$executeConvert === void 0 ? split.executeConvert.none : _str$executeConvert;
  } else if ((0, _isObjectParameter.isObjectParameter)(separator, 'separator', 'excludeEmptyStr, executeConvert')) {
    var _separator = separator;
    separator = _separator.separator;
    var _separator$excludeEmp = _separator.excludeEmptyStr;
    excludeEmptyStr = _separator$excludeEmp === void 0 ? split.excludeEmptyStr.none : _separator$excludeEmp;
    var _separator$executeCon = _separator.executeConvert;
    executeConvert = _separator$executeCon === void 0 ? split.executeConvert.none : _separator$executeCon;
  } else if ((0, _isObjectParameter.isObjectParameter)(excludeEmptyStr, '', 'excludeEmptyStr, executeConvert', 1)) {
    var _excludeEmptyStr = excludeEmptyStr;
    var _excludeEmptyStr$excl = _excludeEmptyStr.excludeEmptyStr;
    excludeEmptyStr = _excludeEmptyStr$excl === void 0 ? split.excludeEmptyStr.none : _excludeEmptyStr$excl;
    var _excludeEmptyStr$exec = _excludeEmptyStr.executeConvert;
    executeConvert = _excludeEmptyStr$exec === void 0 ? split.executeConvert.none : _excludeEmptyStr$exec;
  } else if ((0, _isObjectParameter.isObjectParameter)(executeConvert, 'executeConvert')) {
    var _executeConvert = executeConvert;
    executeConvert = _executeConvert.executeConvert;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('split args(str) is not string');
  }

  if (!(0, _type.isString)(separator)) {
    throw new TypeError('split args(separator) is not string');
  }

  if (!(0, _or2._or)(excludeEmptyStr, (0, _objectValues2._objectValues)(split.excludeEmptyStr))) {
    throw new TypeError('split args(excludeEmptyStr) is not ["none","first","last","bothEnds","all"]');
  }

  if (!(0, _or2._or)(executeConvert, (0, _objectValues2._objectValues)(split.executeConvert))) {
    throw new TypeError('split args(executeConvert) is not ["none","trim","all"]');
  }

  return (0, _split2._split)(str, separator, excludeEmptyStr, executeConvert);
};

exports.split = split;
split.excludeEmptyStr = _split2._split.excludeEmptyStr;
split.executeConvert = _split2._split.executeConvert;
var _default = {
  split: split
};
exports["default"] = _default;
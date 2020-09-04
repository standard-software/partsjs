"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.split = exports._split = void 0;

var _type = require("../type/type.js");

var _Enum2 = require("../syntax/Enum.js");

var _loop = require("../syntax/loop.js");

var _array_operation = require("../array/array_operation.js");

var _array_common = require("../array/array_common.js");

var _string_common = require("../string/string_common.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * split
 */
var _split = function _split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : split.excludeEmptyStr.none;
  var excludeSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : split.excludeSpace.none;
  var result = str.split(separator);

  switch (excludeEmptyStr) {
    case split.excludeEmptyStr.none:
      break;

    case split.excludeEmptyStr.first:
      if (1 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }
      }

      break;

    case split.excludeEmptyStr.last:
      if (1 <= result.length) {
        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case split.excludeEmptyStr.bothEnds:
      if (1 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }
      }

      if (1 <= result.length) {
        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case split.excludeEmptyStr.all:
      (0, _array_operation._filter)(result, function (element) {
        return element !== '';
      });
      break;

    default:
      throw new TypeError('_split args(excludeEmptyStr) is not ["none"|"first"|"last"|"bothEnds"|"all"]');
  }

  switch (excludeSpace) {
    case split.excludeSpace.none:
      break;

    case split.excludeSpace.trim:
      (0, _loop.loop)(result)(function (e, i) {
        result[i] = (0, _string_common._trimBothEnds)(e, [' ']);
      });
      break;

    case split.excludeSpace.all:
      (0, _loop.loop)(result)(function (e, i) {
        result[i] = (0, _replaceAll2._replaceAll)(e, ' ', '');
      });
      break;

    default:
      throw new TypeError('_split args(excludeSpace) is not ["none"|"trim"|"all"]');
  }

  return result;
};

exports._split = _split;

var split = function split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : split.excludeEmptyStr.none;
  var excludeSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : split.excludeSpace.none;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, separator', 'excludeEmptyStr, excludeSpace')) {
    var _str = str;
    str = _str.str;
    separator = _str.separator;
    var _str$excludeEmptyStr = _str.excludeEmptyStr;
    excludeEmptyStr = _str$excludeEmptyStr === void 0 ? split.excludeEmptyStr.none : _str$excludeEmptyStr;
    var _str$excludeSpace = _str.excludeSpace;
    excludeSpace = _str$excludeSpace === void 0 ? split.excludeSpace.none : _str$excludeSpace;
  } else if ((0, _isObjectParameter.isObjectParameter)(separator, 'separator', 'excludeEmptyStr, excludeSpace')) {
    var _separator = separator;
    separator = _separator.separator;
    var _separator$excludeEmp = _separator.excludeEmptyStr;
    excludeEmptyStr = _separator$excludeEmp === void 0 ? split.excludeEmptyStr.none : _separator$excludeEmp;
    var _separator$excludeSpa = _separator.excludeSpace;
    excludeSpace = _separator$excludeSpa === void 0 ? split.excludeSpace.none : _separator$excludeSpa;
  } else if ((0, _isObjectParameter.isObjectParameter)(excludeEmptyStr, '', 'excludeEmptyStr, excludeSpace', 1)) {
    var _excludeEmptyStr = excludeEmptyStr;
    var _excludeEmptyStr$excl = _excludeEmptyStr.excludeEmptyStr;
    excludeEmptyStr = _excludeEmptyStr$excl === void 0 ? split.excludeEmptyStr.none : _excludeEmptyStr$excl;
    var _excludeEmptyStr$excl2 = _excludeEmptyStr.excludeSpace;
    excludeSpace = _excludeEmptyStr$excl2 === void 0 ? split.excludeSpace.none : _excludeEmptyStr$excl2;
  } else if ((0, _isObjectParameter.isObjectParameter)(excludeSpace, 'excludeSpace')) {
    var _excludeSpace = excludeSpace;
    excludeSpace = _excludeSpace.excludeSpace;
  }

  return _split(str, separator, excludeEmptyStr, excludeSpace);
};

exports.split = split;
split.excludeEmptyStr = (0, _Enum2._Enum)(['none', 'first', 'last', 'bothEnds', 'all']);
split.excludeSpace = (0, _Enum2._Enum)(['none', 'trim', 'all']);
var _default = {
  _split: _split,
  split: split
};
exports["default"] = _default;
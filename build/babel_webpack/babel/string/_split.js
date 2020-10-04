"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._split = void 0;

var _type = require("../type/type.js");

var _Enum2 = require("../syntax/_Enum.js");

var _loop = require("../syntax/__loop.js");

var _array_operation = require("../array/array_operation.js");

var _array_common = require("../array/array_common.js");

var _string_common = require("../string/string_common.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _replaceAllArray2 = require("../string/_replaceAllArray.js");

var _or2 = require("../compare/or.js");

var _objectValues2 = require("../object/objectValues.js");

/**
 * split
 */
var _split = function _split(str, separator) {
  var excludeEmptyStr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _split.excludeEmptyStr.none;
  var executeConvert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _split.executeConvert.none;
  var result = str.split(separator);

  switch (executeConvert) {
    case _split.executeConvert.none:
      break;

    case _split.executeConvert.trimSpace:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _string_common._trimBothEnds)(e, [' ']);
      });
      break;

    case _split.executeConvert.trimSpaceCrlf:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _string_common._trimBothEnds)(e);
      });
      break;

    case _split.executeConvert.excludeSpace:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _replaceAll2._replaceAll)(e, ' ', '');
      });
      break;

    case _split.executeConvert.excludeSpaceCrlf:
      (0, _loop.__loop)(result)(function (e, i) {
        result[i] = (0, _replaceAllArray2._replaceAllArray)(e, [[' ', ''], ['\n', ''], ['\r', '']]);
      });
      break;

    default:
      throw new TypeError('_split args(executeConvert) is not ["none"|"trim"|"all"]');
  }

  switch (excludeEmptyStr) {
    case _split.excludeEmptyStr.none:
      break;

    case _split.excludeEmptyStr.first:
      if (1 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }
      }

      break;

    case _split.excludeEmptyStr.last:
      if (2 <= result.length) {
        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case _split.excludeEmptyStr.bothEnds:
      if (2 <= result.length) {
        if ((0, _array_common._isFirst)(result, [''])) {
          (0, _array_operation._deleteFirst)(result);
        }

        if ((0, _array_common._isLast)(result, [''])) {
          (0, _array_operation._deleteLast)(result);
        }
      }

      break;

    case _split.excludeEmptyStr.all:
      (0, _array_operation._filter)(result, function (element) {
        return element !== '';
      });
      break;

    default:
      throw new TypeError('_split args(excludeEmptyStr) is not ["none"|"first"|"last"|"bothEnds"|"all"]');
  }

  return result;
};

exports._split = _split;
_split.excludeEmptyStr = (0, _Enum2._Enum)(['none', 'first', 'last', 'bothEnds', 'all']);
_split.executeConvert = (0, _Enum2._Enum)(['none', 'trimSpace', 'trimSpaceCrlf', 'excludeSpace', 'excludeSpaceCrlf']);
var _default = {
  _split: _split
};
exports["default"] = _default;
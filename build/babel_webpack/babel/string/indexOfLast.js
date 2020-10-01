"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfLast = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _number = require("../number/number.js");

var _array = require("../array/array.js");

var _indexOfLast2 = require("../string/_indexOfLast.js");

/**
 * indexOfLast
 */
var indexOfLast = function indexOfLast(str, search) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
    var _str$indexStart = _str.indexStart;
    indexStart = _str$indexStart === void 0 ? (0, _array._max)([0, str.length - 1]) : _str$indexStart;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('indexOfLast args(str) is not string');
  }

  if (!(0, _isType.isString)(search)) {
    throw new TypeError('indexOfLast args(search) is not string');
  }

  if (!(0, _isType.isInteger)(indexStart)) {
    throw new TypeError('indexOfLast args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfLast args(indexStart) must be from 0 to str.length - 1');
  }

  return (0, _indexOfLast2._indexOfLast)(str, search, indexStart);
};

exports.indexOfLast = indexOfLast;
var _default = {
  indexOfLast: indexOfLast
};
exports["default"] = _default;
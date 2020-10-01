"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.indexOfAnyLast = void 0;

var _isType = require("../type/isType.js");

var _isTypeArray = require("../type/isTypeArray.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _number = require("../number/number.js");

var _array = require("../array/array.js");

var _indexOfAnyLast2 = require("../string/_indexOfAnyLast.js");

/**
 * indexOfAnyLast
 */
var indexOfAnyLast = function indexOfAnyLast(str, searchArray) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _array._max)([0, str.length - 1]);

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, search', 'indexStart')) {
    var _str = str;
    str = _str.str;
    search = _str.search;
    var _str$indexStart = _str.indexStart;
    indexStart = _str$indexStart === void 0 ? (0, _array._max)([0, str.length - 1]) : _str$indexStart;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError('indexOfAnyLast args(str) is not string');
  }

  if (!(0, _isTypeArray.isStringArray)(searchArray)) {
    throw new TypeError('indexOfAnyLast args(searchArray) is not string array');
  }

  if (!(0, _isType.isInteger)(indexStart)) {
    throw new TypeError('indexOfAnyLast args(indexStart) is not integer');
  }

  if (!(0, _number._inRange)(indexStart, 0, (0, _array._max)([0, str.length - 1]))) {
    throw new RangeError('indexOfAnyLast args(indexStart) must be from 0 to str.length - 1');
  }

  return (0, _indexOfAnyLast2._indexOfAnyLast)(str, searchArray, indexStart);
};

exports.indexOfAnyLast = indexOfAnyLast;
var _default = {
  indexOfAnyLast: indexOfAnyLast
};
exports["default"] = _default;
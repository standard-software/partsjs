"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.popArrayLast = void 0;

var _isType = require("../../type/isType.js");

var _number = require("../../number/number.js");

var _isObjectParameter = require("../../object/isObjectParameter.js");

var _popArrayLast2 = require("./_popArrayLast.js");

/**
 * array.operation.popArrayLast
 */
var popArrayLast = function popArrayLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'length')) {
    var _array = array;
    array = _array.array;
    var _array$length = _array.length;
    length = _array$length === void 0 ? 1 : _array$length;
  } else if ((0, _isObjectParameter.isObjectParameter)(length, 'length')) {
    var _length = length;
    length = _length.length;
  }

  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('popArrayLast args(array) is not array');
  }

  if (!(0, _isType.isInteger)(length)) {
    throw new TypeError('popArrayLast args(length) is not integer');
  }

  if (!(0, _number._inRange)(length, 1, array.length)) {
    throw new RangeError('popArrayLast args(length) must be from 0 to array.length');
  }

  return (0, _popArrayLast2._popArrayLast)(array, length);
};

exports.popArrayLast = popArrayLast;
var _default = {
  popArrayLast: popArrayLast
};
exports["default"] = _default;
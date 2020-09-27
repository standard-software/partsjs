"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IntegerArray = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _IntegerArray2 = require("../array/_IntegerArray.js");

/**
 * IntegerArray
 */
var IntegerArray = function IntegerArray(start, end, increment) {
  if ((0, _isObjectParameter.isObjectParameter)(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if ((0, _isObjectParameter.isObjectParameter)(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  }

  if (!(0, _type.isInteger)(start)) {
    throw new TypeError('IntegerArray args(start) is not number');
  }

  if (!(0, _type.isUndefined)(end) && !(0, _type.isInteger)(end)) {
    throw new TypeError('IntegerArray args(end) is not number');
  }

  if (!(0, _type.isUndefined)(increment) && !(0, _type.isInteger)(increment)) {
    throw new TypeError('IntegerArray args(increment) is not number');
  }

  return (0, _IntegerArray2._IntegerArray)(start, end, increment);
};

exports.IntegerArray = IntegerArray;
var _default = {
  IntegerArray: IntegerArray
};
exports["default"] = _default;
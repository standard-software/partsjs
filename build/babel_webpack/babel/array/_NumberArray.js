"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._NumberArray = void 0;

var _type = require("../type/type.js");

/**
 * NumberArray
 */
var _NumberArray = function _NumberArray(start, end, increment) {
  if (!(this instanceof _NumberArray)) {
    return new _NumberArray(start, end, increment);
  }

  if ((0, _type.isUndefined)(increment)) {
    if ((0, _type.isUndefined)(end)) {
      increment = 1;
      end = increment * start - 1;
      start = 0;
    } else {
      if (start <= end) {
        increment = 1;
      } else {
        increment = -1;
      }
    }
  }

  if (increment === 0) {
    throw new RangeError('_NumberArray args(increment) is 0');
  }

  if (start <= end) {
    if (increment < 0) {
      throw new Error('_NumberArray args(increment) < 0');
    }
  } else {
    if (increment > 0) {
      throw new Error('_NumberArray args(increment) > 0');
    }
  }

  var result = [];

  if (start <= end) {
    for (var i = start, l = end; i <= l; i += increment) {
      result.push(i);
    }
  } else {
    for (var _i = start, _l = end; _l <= _i; _i += increment) {
      result.push(_i);
    }
  }

  return result;
};

exports._NumberArray = _NumberArray;
var _default = {
  _NumberArray: _NumberArray
};
exports["default"] = _default;
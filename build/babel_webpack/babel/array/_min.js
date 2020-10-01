"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._min = void 0;

/**
 * array.min
 */
var _min = function _min(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (array[i] < result) {
      result = array[i];
    }
  }

  return result;
};

exports._min = _min;
var _default = {
  _min: _min
};
exports["default"] = _default;
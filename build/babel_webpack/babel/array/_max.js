"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._max = void 0;

/**
 * array.max
 */
var _max = function _max(array) {
  if (array.length === 0) {
    return null;
  }

  var result = array[0];

  for (var i = 0, l = array.length; i < l; i += 1) {
    if (result < array[i]) {
      result = array[i];
    }
  }

  return result;
};

exports._max = _max;
var _default = {
  _max: _max
};
exports["default"] = _default;
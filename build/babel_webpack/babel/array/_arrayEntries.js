"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._arrayEntries = void 0;

/**
 * arrayEntries
 */
var _arrayEntries = function _arrayEntries(array) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    result.push([i, array[i]]);
  }

  return result;
};

exports._arrayEntries = _arrayEntries;
var _default = {
  _arrayEntries: _arrayEntries
};
exports["default"] = _default;
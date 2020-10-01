"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfFirst = void 0;

/**
 * indexOfFirst
 */
var _indexOfFirst = function _indexOfFirst(str, search, indexStart) {
  if (search === '') {
    return -1;
  }

  return str.indexOf(search, indexStart);
};

exports._indexOfFirst = _indexOfFirst;
var _default = {
  _indexOfFirst: _indexOfFirst
};
exports["default"] = _default;
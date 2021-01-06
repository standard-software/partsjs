"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._includeCount = void 0;

var _indexOfFirst2 = require("../string/_indexOfFirst.js");

/**
 * includeCount
 */
var _includeCount = function _includeCount(str, search) {
  var result = 0;
  var index = 0;

  do {
    index = (0, _indexOfFirst2._indexOfFirst)(str, search, index);

    if (index === -1) {
      break;
    }

    index += search.length;
    result += 1;
  } while (true);

  return result;
};

exports._includeCount = _includeCount;
var _default = {
  _includeCount: _includeCount
};
exports["default"] = _default;
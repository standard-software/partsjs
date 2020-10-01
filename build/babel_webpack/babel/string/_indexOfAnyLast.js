"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfAnyLast = void 0;

var _indexOfLast2 = require("../string/_indexOfLast.js");

var _loop = require("../syntax/__loop.js");

var _indexOfAnyLast = function _indexOfAnyLast(str, searchArray) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _max([0, str.length - 1]);
  var result = -1;
  var searchIndex = -1;
  (0, _loop.__loop)(searchArray)(function (search, index) {
    var findIndex = (0, _indexOfLast2._indexOfLast)(str, search, indexStart);

    if (findIndex !== -1) {
      if (result < findIndex) {
        result = findIndex;
        searchIndex = index;
      }
    }
  });

  if (result === -1) {
    return {
      index: -1,
      searchIndex: -1
    };
  }

  return {
    index: result,
    searchIndex: searchIndex
  };
};

exports._indexOfAnyLast = _indexOfAnyLast;
var _default = {
  _indexOfAnyLast: _indexOfAnyLast
};
exports["default"] = _default;
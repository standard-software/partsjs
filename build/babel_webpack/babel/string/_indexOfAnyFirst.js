"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._indexOfAnyFirst = void 0;

var _indexOfFirst2 = require("../string/_indexOfFirst.js");

var _loop = require("../syntax/__loop.js");

var _indexOfAnyFirst = function _indexOfAnyFirst(str, searchArray) {
  var indexStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var result = Infinity;
  var searchIndex = -1;
  (0, _loop.__loop)(searchArray)(function (search, index) {
    var findIndex = (0, _indexOfFirst2._indexOfFirst)(str, search, indexStart);

    if (findIndex !== -1) {
      if (findIndex < result) {
        result = findIndex;
        searchIndex = index;
      }
    }
  });

  if (result === Infinity) {
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

exports._indexOfAnyFirst = _indexOfAnyFirst;
var _default = {
  _indexOfAnyFirst: _indexOfAnyFirst
};
exports["default"] = _default;
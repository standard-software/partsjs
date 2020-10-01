"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._replaceAllArray = void 0;

var _indexOfAnyFirst2 = require("../string/_indexOfAnyFirst.js");

var _string_common = require("../string/string_common.js");

var _array_common = require("../array/array_common.js");

/**
 * replaceAllArray
 */
var _replaceAllArray = function _replaceAllArray(str, replaceArray) {
  var searchArray = (0, _array_common._map)(replaceArray, function (element) {
    return element[0];
  });
  var start = 0;
  var result = '';

  while (true) {
    var searchResult = (0, _indexOfAnyFirst2._indexOfAnyFirst)(str, searchArray, start);

    if (searchResult.index === -1) {
      result += (0, _string_common._subLength)(str, start);
      break;
    }

    if (start < searchResult.index) {
      result += (0, _string_common._subIndex)(str, start, searchResult.index - 1);
      start = searchResult.index;
    }

    result += replaceArray[searchResult.searchIndex][1];
    start += searchArray[searchResult.searchIndex].length;
  }

  return result;
};

exports._replaceAllArray = _replaceAllArray;
var _default = {
  _replaceAllArray: _replaceAllArray
};
exports["default"] = _default;
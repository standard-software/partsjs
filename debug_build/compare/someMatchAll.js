"use strict";

var _require = require('../compare/indexOfMatchAll.js'),
    _indexOfMatchAll = _require._indexOfMatchAll,
    indexOfMatchAll = _require.indexOfMatchAll;
/**
 * someMatchAll
 */


var _someMatchAll = function _someMatchAll(valueArray, compareArray) {
  return _indexOfMatchAll(valueArray, compareArray) !== -1;
};

var someMatchAll = function someMatchAll(valueArray, compareArray) {
  return indexOfMatchAll(valueArray, compareArray) !== -1;
};

module.exports = {
  _someMatchAll: _someMatchAll,
  someMatchAll: someMatchAll
};
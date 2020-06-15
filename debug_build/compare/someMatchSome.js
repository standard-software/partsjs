"use strict";

var _require = require('../compare/indexOfMatchSome.js'),
    _indexOfMatchSome = _require._indexOfMatchSome,
    indexOfMatchSome = _require.indexOfMatchSome;
/**
 * someMatchSome
 */


var _someMatchSome = function _someMatchSome(valueArray, compareArray) {
  return _indexOfMatchSome(valueArray, compareArray) !== -1;
};

var someMatchSome = function someMatchSome(valueArray, compareArray) {
  return indexOfMatchSome(valueArray, compareArray) !== -1;
};

module.exports = {
  _someMatchSome: _someMatchSome,
  someMatchSome: someMatchSome
};
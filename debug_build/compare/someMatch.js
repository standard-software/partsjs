"use strict";

var _require = require('../compare/indexOfMatch.js'),
    _indexOfMatch = _require._indexOfMatch,
    indexOfMatch = _require.indexOfMatch;
/**
 * someMatch
 */


var _someMatch = function _someMatch(valueArray, compare) {
  return _indexOfMatch(valueArray, compare) !== -1;
};

var someMatch = function someMatch(valueArray, compare) {
  return indexOfMatch(valueArray, compare) !== -1;
};

module.exports = {
  _someMatch: _someMatch,
  someMatch: someMatch
};
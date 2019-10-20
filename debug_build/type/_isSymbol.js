"use strict";

var _require = require('../type/_isType.js'),
    _typeofCheck = _require._typeofCheck;

var _isSymbol = _typeofCheck('symbol');

var _isNotSymbol = function _isNotSymbol(value) {
  return !_isSymbol(value);
};

module.exports = {
  _isSymbol: _isSymbol,
  _isNotSymbol: _isNotSymbol
};
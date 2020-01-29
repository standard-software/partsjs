"use strict";

var _require = require('../type/isType.js'),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var isSymbol = _typeofCheck('symbol');

var isNotSymbol = function isNotSymbol(value) {
  return !isSymbol(value);
};

module.exports = {
  isSymbol: isSymbol,
  isNotSymbol: isNotSymbol
};
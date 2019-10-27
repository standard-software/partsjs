"use strict";

var _require = require('../type/_isType.js'),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var _isMap = _objectToStringCheck('Map');

var _isWeakMap = _objectToStringCheck('WeakMap');

var _isNotMap = function _isNotMap(value) {
  return !_isMap(value);
};

var _isNotWeakMap = function _isNotWeakMap(value) {
  return !_isWeakMap(value);
};

module.exports = {
  _isMap: _isMap,
  _isNotMap: _isNotMap,
  _isWeakMap: _isWeakMap,
  _isNotWeakMap: _isNotWeakMap
};
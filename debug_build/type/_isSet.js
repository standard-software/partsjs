"use strict";

var _require = require('../type/_isType.js'),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var _isSet = _objectToStringCheck('Set');

var _isWeakSet = _objectToStringCheck('WeakSet');

var _isNotSet = function _isNotSet(value) {
  return !_isSet(value);
};

var _isNotWeakSet = function _isNotWeakSet(value) {
  return !_isWeakSet(value);
};

module.exports = {
  _isSet: _isSet,
  _isNotSet: _isNotSet,
  _isWeakSet: _isWeakSet,
  _isNotWeakSet: _isNotWeakSet
};
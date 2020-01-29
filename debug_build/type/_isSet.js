"use strict";

var _require = require('../type/isType.js'),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var isSet = _objectToStringCheck('Set');

var isWeakSet = _objectToStringCheck('WeakSet');

var isNotSet = function isNotSet(value) {
  return !isSet(value);
};

var isNotWeakSet = function isNotWeakSet(value) {
  return !isWeakSet(value);
};

module.exports = {
  isSet: isSet,
  isNotSet: isNotSet,
  isWeakSet: isWeakSet,
  isNotWeakSet: isNotWeakSet
};
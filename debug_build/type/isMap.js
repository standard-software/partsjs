"use strict";

var _require = require('../type/isType.js'),
    _typeofCheck = _require._typeofCheck,
    _objectToStringCheck = _require._objectToStringCheck,
    objectToString = _require.objectToString;

var isMap = _objectToStringCheck('Map');

var isWeakMap = _objectToStringCheck('WeakMap');

var isNotMap = function isNotMap(value) {
  return !isMap(value);
};

var isNotWeakMap = function isNotWeakMap(value) {
  return !isWeakMap(value);
};

module.exports = {
  isMap: isMap,
  isNotMap: isNotMap,
  isWeakMap: isWeakMap,
  isNotWeakMap: isNotWeakMap
};
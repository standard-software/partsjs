"use strict";

var _require = require('../type/isType.js'),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;

var _objectEntries = function _objectEntries(object) {
  var result = [];

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }

  return result;
};

var objectEntries = function objectEntries(object) {
  if (isObjectParameter(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!isObject(object)) {
    throw new TypeError('objectEntries args(object) is not object');
  }

  return _objectEntries(object);
};

var entries = objectEntries;
module.exports = {
  _objectEntries: _objectEntries,
  objectEntries: objectEntries,
  entries: entries
};
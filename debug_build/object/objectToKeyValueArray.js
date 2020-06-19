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
    isRegExp = _require.isRegExp;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;
/**
 * objectToKeyValueArray
 */


var _objectToKeyValueArray = function _objectToKeyValueArray(object) {
  var result = [];

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }

  return result;
};

var objectToKeyValueArray = function objectToKeyValueArray(object) {
  if (isObjectParameter(object, 'object')) {
    var _object = object;
    object = _object.object;
  }

  if (!isObject(object)) {
    throw new TypeError('objectToKeyValueArray args(object) is not object');
  }

  return _objectToKeyValueArray(object);
};

var objectEntries = objectToKeyValueArray;
module.exports = {
  _objectToKeyValueArray: _objectToKeyValueArray,
  objectToKeyValueArray: objectToKeyValueArray,
  objectEntries: objectEntries
};
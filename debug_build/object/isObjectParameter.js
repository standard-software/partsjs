"use strict";

var _require = require('../type/_isType.js'),
    _isUndefined = _require._isUndefined,
    _isNull = _require._isNull,
    _isNaNStrict = _require._isNaNStrict,
    _isBoolean = _require._isBoolean,
    _isNumber = _require._isNumber,
    _isInteger = _require._isInteger,
    _isString = _require._isString,
    _isFunction = _require._isFunction,
    _isObject = _require._isObject,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var _require2 = require('../string/_replaceAll.js'),
    _replaceAll = _require2._replaceAll;

var _require3 = require('../object/_propertyCount.js'),
    _propertyCount = _require3._propertyCount;
/**
 * isObjectParameter
 */


var isObjectParameter = function isObjectParameter(object, propertyArray) {
  var defaultPropertyArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!_isObject(object)) {
    return false;
  }

  var filterArray = function filterArray(array) {
    var result = [];

    for (var i = 0; i < array.length; i += 1) {
      if (array[i] === '' || _isUndefined(array[i])) {
        continue;
      }

      if (!_isString(array[i])) {
        throw new TypeError('isObjectParameter args(propertyArray|defaultPropertyArray)' + ' element is not string');
      }

      result.push(array[i]);
    }

    return result;
  };

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  propertyArray = filterArray(propertyArray);

  if (_isString(defaultPropertyArray)) {
    defaultPropertyArray = _replaceAll(defaultPropertyArray, ' ', '').split(',');
  }

  defaultPropertyArray = filterArray(defaultPropertyArray);

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (!(propertyArray.indexOf(property) !== -1 || defaultPropertyArray.indexOf(property) !== -1)) {
        return false;
      }
    }
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (!object.hasOwnProperty(propertyArray[i])) {
      return false;
    }
  }

  return true;
};

module.exports = {
  isObjectParameter: isObjectParameter
};
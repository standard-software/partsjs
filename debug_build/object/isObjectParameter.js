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

var _require2 = require('../string/_replaceAll.js'),
    _replaceAll = _require2._replaceAll;

var _require3 = require('../object/_propertyCount.js'),
    _propertyCount = _require3._propertyCount;
/**
 * isObjectParameter
 */


var isObjectParameter = function isObjectParameter(object, propertyArray) {
  var defaultPropertyArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!isObject(object)) {
    return false;
  }

  var filterArray = function filterArray(array) {
    var result = [];

    for (var i = 0; i < array.length; i += 1) {
      if (array[i] === '' || isUndefined(array[i])) {
        continue;
      }

      if (!isString(array[i])) {
        throw new TypeError('isObjectParameter args(propertyArray|defaultPropertyArray)' + ' element is not string');
      }

      result.push(array[i]);
    }

    return result;
  };

  if (isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  propertyArray = filterArray(propertyArray);

  if (isString(defaultPropertyArray)) {
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
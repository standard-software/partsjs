"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require('../object/_propertyCount.js'),
    _propertyCount = _require._propertyCount;

var _typeofCheck = function _typeofCheck(typeName) {
  return function (value) {
    return _typeof(value) === typeName;
  };
};

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};

var _objectToStringCheck = function _objectToStringCheck(typeName) {
  return function (value) {
    return objectToString(value) === "[object ".concat(typeName, "]");
  };
};

var isUndefined = _typeofCheck('undefined');

var isNull = function isNull(value) {
  return value === null;
};

var isNaNStrict = function isNaNStrict(value) {
  return value !== value;
};

var isBoolean = _typeofCheck('boolean');

var isBooleanObject = function isBooleanObject(value) {
  return _objectToStringCheck('Boolean') && !isBoolean(value);
};

var isNumber = function isNumber(value) {
  return _typeofCheck('number')(value) && isFinite(value);
};

var isNumberObject = function isNumberObject(value) {
  return _objectToStringCheck('Number')(value) && !_typeofCheck('number')(value);
};

var isInteger = function isInteger(value) {
  if (!isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

var isString = _typeofCheck('string');

var isStringObject = function isStringObject(value) {
  return _objectToStringCheck('String') && !isString(value);
};

var isFunction = _typeofCheck('function');

var isObject = function isObject(value) {
  if (_objectToStringCheck('Object')(value) && !isNull(value) && !isUndefined(value)) {
    return true;
  }

  return false;
};

var isObjectType = function isObjectType(value) {
  if (isNull(value)) {
    return false;
  }

  return ['function', 'object'].includes(_typeof(value));
};

var isEmptyObject = function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }

  return _propertyCount(value) === 0;
};

var isArray = _objectToStringCheck('Array'); // Int8Array Uint16Array Float32Array Float64Array etc...


var isArrayType = function isArrayType(value) {
  if (objectToString(value).indexOf('Array]') !== -1) {
    return true;
  }

  return false;
};

var isEmptyArray = function isEmptyArray(value) {
  if (!isArrayType(value)) {
    return false;
  }

  return value.length === 0;
};

var isDate = _objectToStringCheck('Date');

var isRegExp = _objectToStringCheck('RegExp');

var isError = _objectToStringCheck('Error');

var isNotUndefined = function isNotUndefined(value) {
  return !isUndefined(value);
};

var isNotNull = function isNotNull(value) {
  return !isNull(value);
};

var isNotNaNStrictAll = function isNotNaNStrictAll(value) {
  return !isNaNStrict(value);
};

var isNotBoolean = function isNotBoolean(value) {
  return !isBoolean(value);
};

var isNotNumber = function isNotNumber(value) {
  return !isNumber(value);
};

var isNotInteger = function isNotInteger(value) {
  return !isInteger(value);
};

var isNotString = function isNotString(value) {
  return !isString(value);
};

var isNotFunction = function isNotFunction(value) {
  return !isFunction(value);
};

var isNotObject = function isNotObject(value) {
  return !isObject(value);
};

var isNotObjectType = function isNotObjectType(value) {
  return !isObjectType(value);
};

var isNotArray = function isNotArray(value) {
  return !isArray(value);
};

var isNotArrayType = function isNotArrayType(value) {
  return !isArrayType(value);
};

var isNotDate = function isNotDate(value) {
  return !isDate(value);
};

var isNotRegExp = function isNotRegExp(value) {
  return !isRegExp(value);
};

var isNotBooleanObject = function isNotBooleanObject(value) {
  return !isBooleanObject(value);
};

var isNotNumberObject = function isNotNumberObject(value) {
  return !isNumberObject(value);
};

var isNotStringObject = function isNotStringObject(value) {
  return !isStringObject(value);
};

var isNotEmptyObject = function isNotEmptyObject(value) {
  return !isEmptyObject(value);
};

var isNotEmptyArray = function isNotEmptyArray(value) {
  return !isEmptyArray(value);
};

module.exports = {
  _typeofCheck: _typeofCheck,
  _objectToStringCheck: _objectToStringCheck,
  objectToString: objectToString,
  isUndefined: isUndefined,
  isNull: isNull,
  isNaNStrict: isNaNStrict,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isInteger: isInteger,
  isString: isString,
  isFunction: isFunction,
  isObject: isObject,
  isObjectType: isObjectType,
  isArray: isArray,
  isArrayType: isArrayType,
  isDate: isDate,
  isRegExp: isRegExp,
  isError: isError,
  isBooleanObject: isBooleanObject,
  isNumberObject: isNumberObject,
  isStringObject: isStringObject,
  isEmptyObject: isEmptyObject,
  isEmptyArray: isEmptyArray,
  isNotUndefined: isNotUndefined,
  isNotNull: isNotNull,
  isNotNaNStrictAll: isNotNaNStrictAll,
  isNotBoolean: isNotBoolean,
  isNotNumber: isNotNumber,
  isNotInteger: isNotInteger,
  isNotString: isNotString,
  isNotFunction: isNotFunction,
  isNotObject: isNotObject,
  isNotObjectType: isNotObjectType,
  isNotArray: isNotArray,
  isNotArrayType: isNotArrayType,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotBooleanObject: isNotBooleanObject,
  isNotNumberObject: isNotNumberObject,
  isNotStringObject: isNotStringObject,
  isNotEmptyObject: isNotEmptyObject,
  isNotEmptyArray: isNotEmptyArray
};
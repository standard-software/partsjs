"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _isUndefined = _typeofCheck('undefined');

var _isNull = function _isNull(value) {
  return value === null;
};

var _isNaNStrict = function _isNaNStrict(value) {
  return value !== value;
};

var _isBoolean = _typeofCheck('boolean');

var _isBooleanObject = function _isBooleanObject(value) {
  return _objectToStringCheck('Boolean') && !_isBoolean(value);
};

var _isNumber = function _isNumber(value) {
  return _typeofCheck('number')(value) && isFinite(value);
};

var _isNumberObject = function _isNumberObject(value) {
  return _objectToStringCheck('Number')(value) && !_typeofCheck('number')(value);
};

var _isInteger = function _isInteger(value) {
  if (!_isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

var _isString = _typeofCheck('string');

var _isStringObject = function _isStringObject(value) {
  return _objectToStringCheck('String') && !_isString(value);
};

var _isFunction = _typeofCheck('function');

var _isObject = function _isObject(value) {
  if (_objectToStringCheck('Object')(value) && !_isNull(value) && !_isUndefined(value)) {
    return true;
  }

  return false;
};

var _isObjectType = function _isObjectType(value) {
  if (_isNull(value)) {
    return false;
  }

  return ['function', 'object'].includes(_typeof(value));
};

var _isEmptyObject = function _isEmptyObject(value) {
  if (!_isObject(value)) {
    return false;
  }

  return _propertyCount(value) === 0;
};

var _isArray = _objectToStringCheck('Array'); // Int8Array Uint16Array Float32Array Float64Array etc...


var _isArrayType = function _isArrayType(value) {
  if (objectToString(value).includes('Array]')) {
    return true;
  }

  return false;
};

var _isEmptyArray = function _isEmptyArray(value) {
  if (!_isArrayType(value)) {
    return false;
  }

  return value.length === 0;
};

var _isDate = _objectToStringCheck('Date');

var _isRegExp = _objectToStringCheck('RegExp');

var _isError = _objectToStringCheck('Error');

var _isNotUndefined = function _isNotUndefined(value) {
  return !_isUndefined(value);
};

var _isNotNull = function _isNotNull(value) {
  return !_isNull(value);
};

var _isNotNaNStrict = function _isNotNaNStrict(value) {
  return !_isNaNStrict(value);
};

var _isNotBoolean = function _isNotBoolean(value) {
  return !_isBoolean(value);
};

var _isNotNumber = function _isNotNumber(value) {
  return !_isNumber(value);
};

var _isNotInteger = function _isNotInteger(value) {
  return !_isInteger(value);
};

var _isNotString = function _isNotString(value) {
  return !_isString(value);
};

var _isNotFunction = function _isNotFunction(value) {
  return !_isFunction(value);
};

var _isNotObject = function _isNotObject(value) {
  return !_isObject(value);
};

var _isNotObjectType = function _isNotObjectType(value) {
  return !_isObjectType(value);
};

var _isNotArray = function _isNotArray(value) {
  return !_isArray(value);
};

var _isNotArrayType = function _isNotArrayType(value) {
  return !_isArrayType(value);
};

var _isNotDate = function _isNotDate(value) {
  return !_isDate(value);
};

var _isNotRegExp = function _isNotRegExp(value) {
  return !_isRegExp(value);
};

var _isNotBooleanObject = function _isNotBooleanObject(value) {
  return !_isBooleanObject(value);
};

var _isNotNumberObject = function _isNotNumberObject(value) {
  return !_isNumberObject(value);
};

var _isNotStringObject = function _isNotStringObject(value) {
  return !_isStringObject(value);
};

var _isNotEmptyObject = function _isNotEmptyObject(value) {
  return !_isEmptyObject(value);
};

var _isNotEmptyArray = function _isNotEmptyArray(value) {
  return !_isEmptyArray(value);
};

module.exports = {
  _typeofCheck: _typeofCheck,
  _objectToStringCheck: _objectToStringCheck,
  objectToString: objectToString,
  _isUndefined: _isUndefined,
  _isNull: _isNull,
  _isNaNStrict: _isNaNStrict,
  _isBoolean: _isBoolean,
  _isNumber: _isNumber,
  _isInteger: _isInteger,
  _isString: _isString,
  _isFunction: _isFunction,
  _isObject: _isObject,
  _isObjectType: _isObjectType,
  _isArray: _isArray,
  _isArrayType: _isArrayType,
  _isDate: _isDate,
  _isRegExp: _isRegExp,
  _isError: _isError,
  _isBooleanObject: _isBooleanObject,
  _isNumberObject: _isNumberObject,
  _isStringObject: _isStringObject,
  _isEmptyObject: _isEmptyObject,
  _isEmptyArray: _isEmptyArray,
  _isNotUndefined: _isNotUndefined,
  _isNotNull: _isNotNull,
  _isNotNaNStrict: _isNotNaNStrict,
  _isNotBoolean: _isNotBoolean,
  _isNotNumber: _isNotNumber,
  _isNotInteger: _isNotInteger,
  _isNotString: _isNotString,
  _isNotFunction: _isNotFunction,
  _isNotObject: _isNotObject,
  _isNotObjectType: _isNotObjectType,
  _isNotArray: _isNotArray,
  _isNotArrayType: _isNotArrayType,
  _isNotDate: _isNotDate,
  _isNotRegExp: _isNotRegExp,
  _isNotBooleanObject: _isNotBooleanObject,
  _isNotNumberObject: _isNotNumberObject,
  _isNotStringObject: _isNotStringObject,
  _isNotEmptyObject: _isNotEmptyObject,
  _isNotEmptyArray: _isNotEmptyArray
};
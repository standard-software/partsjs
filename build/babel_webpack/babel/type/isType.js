"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyObj = exports.isNotObjType = exports.isNotObj = exports.isNotFunc = exports.isNotStr = exports.isNotInt = exports.isNotNum = exports.isNotBool = exports.isNotUndef = exports.isEmptyObj = exports.isObjType = exports.isObj = exports.isFunc = exports.isStr = exports.isInt = exports.isNum = exports.isBool = exports.isUndef = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArrayType = exports.isNotArray = exports.isNotModule = exports.isNotObjectType = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isError = exports.isRegExp = exports.isDate = exports.isEmptyArray = exports.isArrayType = exports.isArray = exports.isEmptyObject = exports.isModule = exports.isObjectType = exports.isObject = exports.isFunction = exports.isStringObject = exports.isString = exports.isInteger = exports.isNumberObject = exports.isNumber = exports.isBooleanObject = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports._objectToStringCheck = exports.objectToString = exports._typeofCheck = void 0;

var _propertyCount2 = require("../object/_propertyCount.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _typeofCheck = function _typeofCheck(typeName) {
  return function (value) {
    return _typeof(value) === typeName;
  };
};

exports._typeofCheck = _typeofCheck;

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};

exports.objectToString = objectToString;

var _objectToStringCheck = function _objectToStringCheck(typeName) {
  return function (value) {
    return objectToString(value) === "[object ".concat(typeName, "]");
  };
};

exports._objectToStringCheck = _objectToStringCheck;

var isUndefined = _typeofCheck('undefined');

exports.isUndefined = isUndefined;

var isNull = function isNull(value) {
  return value === null;
};

exports.isNull = isNull;

var isNaNStrict = function isNaNStrict(value) {
  return value !== value;
};

exports.isNaNStrict = isNaNStrict;

var isBoolean = _typeofCheck('boolean');

exports.isBoolean = isBoolean;

var isBooleanObject = function isBooleanObject(value) {
  return _objectToStringCheck('Boolean') && !isBoolean(value);
};

exports.isBooleanObject = isBooleanObject;

var isNumber = function isNumber(value) {
  return _typeofCheck('number')(value) && isFinite(value);
};

exports.isNumber = isNumber;

var isNumberObject = function isNumberObject(value) {
  return _objectToStringCheck('Number')(value) && !_typeofCheck('number')(value);
};

exports.isNumberObject = isNumberObject;

var isInteger = function isInteger(value) {
  if (!isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

exports.isInteger = isInteger;

var isString = _typeofCheck('string');

exports.isString = isString;

var isStringObject = function isStringObject(value) {
  return _objectToStringCheck('String') && !isString(value);
};

exports.isStringObject = isStringObject;

var isFunction = _typeofCheck('function');

exports.isFunction = isFunction;

var isObject = function isObject(value) {
  if (_objectToStringCheck('Object')(value) && !isNull(value) && !isUndefined(value)) {
    return true;
  }

  return false;
};

exports.isObject = isObject;

var isObjectType = function isObjectType(value) {
  if (isNull(value)) {
    return false;
  }

  return ['function', 'object'].indexOf(_typeof(value)) !== -1;
};

exports.isObjectType = isObjectType;

var isModule = function isModule(value) {
  if (_objectToStringCheck('Module')(value)) {
    return true;
  }

  return false;
};

exports.isModule = isModule;

var isEmptyObject = function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }

  return (0, _propertyCount2._propertyCount)(value) === 0;
};

exports.isEmptyObject = isEmptyObject;

var isArray = _objectToStringCheck('Array'); // Int8Array Uint16Array Float32Array Float64Array etc...


exports.isArray = isArray;

var isArrayType = function isArrayType(value) {
  if (objectToString(value).indexOf('Array]') !== -1) {
    return true;
  }

  return false;
};

exports.isArrayType = isArrayType;

var isEmptyArray = function isEmptyArray(value) {
  if (!isArrayType(value)) {
    return false;
  }

  return value.length === 0;
};

exports.isEmptyArray = isEmptyArray;

var isDate = _objectToStringCheck('Date');

exports.isDate = isDate;

var isRegExp = _objectToStringCheck('RegExp');

exports.isRegExp = isRegExp;

var isError = _objectToStringCheck('Error');

exports.isError = isError;

var isNotUndefined = function isNotUndefined(value) {
  return !isUndefined(value);
};

exports.isNotUndefined = isNotUndefined;

var isNotNull = function isNotNull(value) {
  return !isNull(value);
};

exports.isNotNull = isNotNull;

var isNotNaNStrict = function isNotNaNStrict(value) {
  return !isNaNStrict(value);
};

exports.isNotNaNStrict = isNotNaNStrict;

var isNotBoolean = function isNotBoolean(value) {
  return !isBoolean(value);
};

exports.isNotBoolean = isNotBoolean;

var isNotNumber = function isNotNumber(value) {
  return !isNumber(value);
};

exports.isNotNumber = isNotNumber;

var isNotInteger = function isNotInteger(value) {
  return !isInteger(value);
};

exports.isNotInteger = isNotInteger;

var isNotString = function isNotString(value) {
  return !isString(value);
};

exports.isNotString = isNotString;

var isNotFunction = function isNotFunction(value) {
  return !isFunction(value);
};

exports.isNotFunction = isNotFunction;

var isNotObject = function isNotObject(value) {
  return !isObject(value);
};

exports.isNotObject = isNotObject;

var isNotObjectType = function isNotObjectType(value) {
  return !isObjectType(value);
};

exports.isNotObjectType = isNotObjectType;

var isNotModule = function isNotModule(value) {
  return !isModule(value);
};

exports.isNotModule = isNotModule;

var isNotArray = function isNotArray(value) {
  return !isArray(value);
};

exports.isNotArray = isNotArray;

var isNotArrayType = function isNotArrayType(value) {
  return !isArrayType(value);
};

exports.isNotArrayType = isNotArrayType;

var isNotDate = function isNotDate(value) {
  return !isDate(value);
};

exports.isNotDate = isNotDate;

var isNotRegExp = function isNotRegExp(value) {
  return !isRegExp(value);
};

exports.isNotRegExp = isNotRegExp;

var isNotBooleanObject = function isNotBooleanObject(value) {
  return !isBooleanObject(value);
};

exports.isNotBooleanObject = isNotBooleanObject;

var isNotNumberObject = function isNotNumberObject(value) {
  return !isNumberObject(value);
};

exports.isNotNumberObject = isNotNumberObject;

var isNotStringObject = function isNotStringObject(value) {
  return !isStringObject(value);
};

exports.isNotStringObject = isNotStringObject;

var isNotEmptyObject = function isNotEmptyObject(value) {
  return !isEmptyObject(value);
};

exports.isNotEmptyObject = isNotEmptyObject;

var isNotEmptyArray = function isNotEmptyArray(value) {
  return !isEmptyArray(value);
};

exports.isNotEmptyArray = isNotEmptyArray;
var isUndef = isUndefined;
exports.isUndef = isUndef;
var isBool = isBoolean;
exports.isBool = isBool;
var isNum = isNumber;
exports.isNum = isNum;
var isInt = isInteger;
exports.isInt = isInt;
var isStr = isString;
exports.isStr = isStr;
var isFunc = isFunction;
exports.isFunc = isFunc;
var isObj = isObject;
exports.isObj = isObj;
var isObjType = isObjectType;
exports.isObjType = isObjType;
var isEmptyObj = isEmptyObject;
exports.isEmptyObj = isEmptyObj;
var isNotUndef = isNotUndefined;
exports.isNotUndef = isNotUndef;
var isNotBool = isNotBoolean;
exports.isNotBool = isNotBool;
var isNotNum = isNotNumber;
exports.isNotNum = isNotNum;
var isNotInt = isNotInteger;
exports.isNotInt = isNotInt;
var isNotStr = isNotString;
exports.isNotStr = isNotStr;
var isNotFunc = isNotFunction;
exports.isNotFunc = isNotFunc;
var isNotObj = isNotObject;
exports.isNotObj = isNotObj;
var isNotObjType = isNotObjectType;
exports.isNotObjType = isNotObjType;
var isNotEmptyObj = isNotEmptyObject;
exports.isNotEmptyObj = isNotEmptyObj;
var _default = {
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
  isModule: isModule,
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
  isNotNaNStrict: isNotNaNStrict,
  isNotBoolean: isNotBoolean,
  isNotNumber: isNotNumber,
  isNotInteger: isNotInteger,
  isNotString: isNotString,
  isNotFunction: isNotFunction,
  isNotObject: isNotObject,
  isNotObjectType: isNotObjectType,
  isNotModule: isNotModule,
  isNotArray: isNotArray,
  isNotArrayType: isNotArrayType,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotBooleanObject: isNotBooleanObject,
  isNotNumberObject: isNotNumberObject,
  isNotStringObject: isNotStringObject,
  isNotEmptyObject: isNotEmptyObject,
  isNotEmptyArray: isNotEmptyArray,
  isUndef: isUndef,
  isBool: isBool,
  isNum: isNum,
  isInt: isInt,
  isStr: isStr,
  isFunc: isFunc,
  isObj: isObj,
  isObjType: isObjType,
  isEmptyObj: isEmptyObj,
  isNotUndef: isNotUndef,
  isNotBool: isNotBool,
  isNotNum: isNotNum,
  isNotInt: isNotInt,
  isNotStr: isNotStr,
  isNotFunc: isNotFunc,
  isNotObj: isNotObj,
  isNotObjType: isNotObjType,
  isNotEmptyObj: isNotEmptyObj
};
exports["default"] = _default;
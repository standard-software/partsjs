"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotEmptyArray = exports.isNotEmptyObject = exports.isNotStringObject = exports.isNotNumberObject = exports.isNotBooleanObject = exports.isNotRegExp = exports.isNotDate = exports.isNotArraySeries = exports.isNotArray = exports.isNotModule = exports.isNotObjectLike = exports.isNotObjectFromNull = exports.isNotObjectNormal = exports.isNotObject = exports.isNotFunction = exports.isNotString = exports.isNotInteger = exports.isNotNumber = exports.isNotBoolean = exports.isNotNaNStrict = exports.isNotNull = exports.isNotUndefined = exports.isError = exports.isRegExp = exports.isDate = exports.isEmptyArray = exports.isArraySeries = exports.isArray = exports.isEmptyObject = exports.isModule = exports.isObjectLike = exports.isObjectFromNull = exports.isObjectNormal = exports.isObject = exports.isFunction = exports.isStringObject = exports.isString = exports.isInteger = exports.isNumberObject = exports.isNumber = exports.isBooleanObject = exports.isBoolean = exports.isNaNStrict = exports.isNull = exports.isUndefined = exports.objectToString = void 0;

var _propertyCount2 = require("../object/_propertyCount.js");

var _platform = require("../platform/platform.js");

var _includes = require("../compare/__includes.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var objectToString = function objectToString(value) {
  return Object.prototype.toString.call(value);
};

exports.objectToString = objectToString;

var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

exports.isUndefined = isUndefined;

var isNull = function isNull(value) {
  return value === null;
};

exports.isNull = isNull;

var isNaNStrict = function isNaNStrict(value) {
  return value !== value;
};

exports.isNaNStrict = isNaNStrict;

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

exports.isBoolean = isBoolean;

var isBooleanObject = function isBooleanObject(value) {
  return objectToString(value) === '[object Boolean]' && !isBoolean(value);
};

exports.isBooleanObject = isBooleanObject;

var isNumber = function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
};

exports.isNumber = isNumber;

var isNumberObject = function isNumberObject(value) {
  return objectToString(value) === '[object Number]' && typeof value !== 'number';
};

exports.isNumberObject = isNumberObject;

var isInteger = function isInteger(value) {
  if (!isNumber(value)) {
    return false;
  }

  return Math.round(value) === value;
};

exports.isInteger = isInteger;

var isString = function isString(value) {
  return typeof value === 'string';
};

exports.isString = isString;

var isStringObject = function isStringObject(value) {
  return objectToString(value) === '[object String]' && typeof value !== 'string';
};

exports.isStringObject = isStringObject;

var isFunction = function isFunction(value) {
  return typeof value === 'function';
};

exports.isFunction = isFunction;

var _isObject;

if ((0, _platform.isWindowsScriptHost)() || (0, _platform.isGasRhino)()) {
  _isObject = function _isObject(value) {
    if (objectToString(value) !== '[object Object]') {
      return false;
    }

    if (isNull(value)) {
      return false;
    }

    if (isUndefined(value)) {
      return false;
    }

    return true;
  };
} else if ((0, _platform.isInternetExplorer)()) {
  _isObject = function _isObject(value) {
    if (objectToString(value) !== '[object Object]') {
      return false;
    }

    if ((0, _includes.__includes)([Map, WeakMap, Set], value.constructor)) {
      return false;
    }

    return true;
  };
} else {
  _isObject = function _isObject(value) {
    if (objectToString(value) !== '[object Object]') {
      return false;
    }

    return true;
  };
}

var isObject = _isObject;
exports.isObject = isObject;

var isObjectNormal = function isObjectNormal(value) {
  if (!isObject(value)) {
    return false;
  }

  if ('constructor' in value) {
    return true;
  }

  return false;
};

exports.isObjectNormal = isObjectNormal;

var isObjectFromNull = function isObjectFromNull(value) {
  if (!isObject(value)) {
    return false;
  }

  if ('constructor' in value) {
    return false;
  }

  return true;
};

exports.isObjectFromNull = isObjectFromNull;

var isObjectLike = function isObjectLike(value) {
  if (isNull(value)) {
    return false;
  }

  return _typeof(value) === 'object' || typeof value === 'function';
};

exports.isObjectLike = isObjectLike;

var isModule = function isModule(value) {
  return objectToString(value) === '[object Module]';
};

exports.isModule = isModule;

var isEmptyObject = function isEmptyObject(value) {
  if (!isObject(value)) {
    return false;
  }

  return (0, _propertyCount2._propertyCount)(value) === 0;
};

exports.isEmptyObject = isEmptyObject;

var _isArray;

if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function _isArray(value) {
    return objectToString(value) === '[object Array]';
  };
}

var isArray = _isArray; // Int8Array Uint16Array Float32Array Float64Array etc

exports.isArray = isArray;

var isArraySeries = function isArraySeries(value) {
  if ((0, _includes.__includes)(objectToString(value), 'Array]')) {
    return true;
  }

  return false;
};

exports.isArraySeries = isArraySeries;

var isEmptyArray = function isEmptyArray(value) {
  if (!isArraySeries(value)) {
    return false;
  }

  return value.length === 0;
};

exports.isEmptyArray = isEmptyArray;

var isDate = function isDate(value) {
  return objectToString(value) === '[object Date]';
};

exports.isDate = isDate;

var isRegExp = function isRegExp(value) {
  return objectToString(value) === '[object RegExp]';
};

exports.isRegExp = isRegExp;

var isError = function isError(value) {
  return objectToString(value) === '[object Error]';
};

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

var isNotObjectNormal = function isNotObjectNormal(value) {
  return !isObjectNormal(value);
};

exports.isNotObjectNormal = isNotObjectNormal;

var isNotObjectFromNull = function isNotObjectFromNull(value) {
  return !isObjectFromNull(value);
};

exports.isNotObjectFromNull = isNotObjectFromNull;

var isNotObjectLike = function isNotObjectLike(value) {
  return !isObjectLike(value);
};

exports.isNotObjectLike = isNotObjectLike;

var isNotModule = function isNotModule(value) {
  return !isModule(value);
};

exports.isNotModule = isNotModule;

var isNotArray = function isNotArray(value) {
  return !isArray(value);
};

exports.isNotArray = isNotArray;

var isNotArraySeries = function isNotArraySeries(value) {
  return !isArraySeries(value);
};

exports.isNotArraySeries = isNotArraySeries;

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
var _default = {
  isError: isError,
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
  isObjectNormal: isObjectNormal,
  isObjectFromNull: isObjectFromNull,
  isObjectLike: isObjectLike,
  isModule: isModule,
  isArray: isArray,
  isArraySeries: isArraySeries,
  isDate: isDate,
  isRegExp: isRegExp,
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
  isNotObjectNormal: isNotObjectNormal,
  isNotObjectFromNull: isNotObjectFromNull,
  isNotObjectLike: isNotObjectLike,
  isNotModule: isNotModule,
  isNotArray: isNotArray,
  isNotArraySeries: isNotArraySeries,
  isNotDate: isNotDate,
  isNotRegExp: isNotRegExp,
  isNotBooleanObject: isNotBooleanObject,
  isNotNumberObject: isNotNumberObject,
  isNotStringObject: isNotStringObject,
  isNotEmptyObject: isNotEmptyObject,
  isNotEmptyArray: isNotEmptyArray
};
exports["default"] = _default;
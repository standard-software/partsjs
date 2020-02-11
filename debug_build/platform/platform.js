"use strict";

var _require = require('../type/type.js'),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isObjectType = _require.isObjectType,
    isArray = _require.isArray,
    isArrayType = _require.isArrayType,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException,
    isBooleanObject = _require.isBooleanObject,
    isNumberObject = _require.isNumberObject,
    isStringObject = _require.isStringObject,
    isSymbol = _require.isSymbol,
    isMap = _require.isMap,
    isWeakMap = _require.isWeakMap,
    isSet = _require.isSet,
    isWeakSet = _require.isWeakSet;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isWsh = function isWsh() {
  return typeof WScript !== 'undefined';
};

var name = function name() {
  var result = '';

  if (isWsh()) {
    result = 'wsh';
  } else if (!isBrowser()) {
    result = 'node';
  } else if (isBrowser()) {
    result = 'web';
  }

  ;

  if (['node', 'wsh', 'web'].indexOf(result) === -1) {
    throw new Error('platform name error');
  }

  return result;
};

var browserName = function browserName() {
  var result = '';

  if (isBrowser()) {
    var ua = window.navigator.userAgent.toLowerCase();

    if (ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1) {
      result = 'ie';
    } else if (ua.indexOf('edge') !== -1) {
      result = 'edge';
    } else if (ua.indexOf('opr') !== -1) {
      result = 'opera';
    } else if (ua.indexOf('chrome') !== -1) {
      result = 'chrome';
    } else if (ua.indexOf('safari') !== -1) {
      result = 'safari';
    } else if (ua.indexOf('firefox') !== -1) {
      result = 'firefox';
    } else {
      result = 'other';
    }
  }

  if (result === '') {
    result = 'noBrowser';
  }

  if (['chrome', 'firefox', 'edge', 'ie', 'safari', 'opera', 'other', 'noBrowser'].indexOf(result) === -1) {
    throw new Error('platform browserName error');
  }

  return result;
};

module.exports = {
  isBrowser: isBrowser,
  isWsh: isWsh,
  name: name,
  browserName: browserName
};
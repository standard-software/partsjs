const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isBooleanObject, isNumberObject, isStringObject,
  isSymbol,
  isMap, isWeakMap,
  isSet, isWeakSet,
} = require('../type/type.js');

const isBrowser = () => {
  return typeof window !== 'undefined';
};

const isWsh = () => {
  return typeof WScript !== 'undefined';
};

const name = () => {
  let result = '';

  if (isWsh()) {
    result = 'wsh';
  } else if (!isBrowser()) {
    result = 'node';
  } else if (isBrowser()) {
    result = 'web';
  };

  if ([
    'node', 'wsh', 'web',
  ].indexOf(result) === -1) {
    throw new Error('platform name error');
  }
  return result;
};

const browserName = () => {
  let result = '';

  if (isBrowser()) {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1) {
      result = 'ie';
    } else if (ua.indexOf('edge') !== -1) {
      result = 'edge';
    } else if (ua.indexOf('chrome') !== -1) {
      result = 'chrome';
    } else if (ua.indexOf('safari') !== -1) {
      result = 'safari';
    } else if (ua.indexOf('firefox') !== -1) {
      result = 'firefox';
    } else if (ua.indexOf('opera') !== -1) {
      result = 'opera';
    } else {
      result = 'other';
    }
  }

  if (result === '') {
    result = 'noBrowser';
  }

  if ([
    'chrome', 'firefox',
    'edge', 'ie',
    'safari', 'opera',
    'other',
    'noBrowser',
  ].indexOf(result) === -1) {
    throw new Error('platform browserName error');
  }
  return result;
};

module.exports = {
  isBrowser,
  isWsh,
  name,
  browserName,
};

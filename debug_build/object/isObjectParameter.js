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


var isObjectParameter = function isObjectParameter(object, props) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!isObject(object)) {
    return false;
  }

  if (!isString(props)) {
    return false;
  }

  if (!isString(defaultProps)) {
    return false;
  }

  props = _replaceAll(props, ' ', '').split(',');
  defaultProps = _replaceAll(defaultProps, ' ', '').split(',');
  var propMatchCount = 0;

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (props.indexOf(property) !== -1) {
        propMatchCount += 1;
      } else if (defaultProps.indexOf(property) !== -1) {} else {
        return false;
      }
    }
  }

  if (propMatchCount !== props.length) {
    return false;
  }

  return true;
};

module.exports = {
  isObjectParameter: isObjectParameter
};
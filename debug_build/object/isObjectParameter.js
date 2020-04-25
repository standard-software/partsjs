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
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!isObject(object)) {
    return false;
  }

  if (!isString(props)) {
    return false;
  }

  if (!isString(optionalProps)) {
    return false;
  }

  props = _replaceAll(props, ' ', '').split(','); // last element === '' delete

  if (props[props.length - 1] === '') {
    props.splice(props.length - 1, 1);
  }

  optionalProps = _replaceAll(optionalProps, ' ', '').split(',');

  if (optionalProps[optionalProps.length - 1] === '') {
    optionalProps.splice(optionalProps.length - 1, 1);
  }

  var propMatchCount = 0;
  var optionalPropMatchCount = 0;

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (props.includes(property)) {
        propMatchCount += 1;
      } else if (optionalProps.includes(property)) {
        optionalPropMatchCount += 1;
      } else {
        return false;
      }
    }
  }

  if (propMatchCount !== props.length) {
    return false;
  }

  if (optionalPropMatchCount < optionalMinCount) {
    return false;
  }

  return true;
};

module.exports = {
  isObjectParameter: isObjectParameter
};
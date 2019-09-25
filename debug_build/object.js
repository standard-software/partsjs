"use strict";

var _require = require('./type.js'),
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

var _require2 = require('./compare.js'),
    initialValue = _require2.initialValue;

var _copyProperty = function _copyProperty(fromObject, propertyString) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var propertyArray = propertyString.split(',');

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '') {
      continue;
    }

    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }

  return toObject;
};

var copyProperty = function copyProperty(fromObject, propertyString) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var param;

  if (_isObject(fromObject) && 'fromObject' in fromObject && 'propertyString' in fromObject) {
    param = fromObject;
    param.toObject = initialValue(param.toObject, {});
  } else {
    param = {
      fromObject: fromObject,
      propertyString: propertyString,
      toObject: toObject
    };
  }

  if (!_isObject(param.fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!_isString(param.propertyString)) {
    throw new TypeError('copyProperty args(propertyString) is not object');
  }

  if (!_isObject(param.toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  _copyProperty(param.fromObject, param.propertyString, param.toObject);
};

module.exports = {
  _copyProperty: _copyProperty,
  copyProperty: copyProperty
};
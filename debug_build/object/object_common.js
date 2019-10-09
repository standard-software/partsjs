"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('../type/type.js'),
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

var _require2 = require('../object/_inProperty.js'),
    _inProperty = _require2._inProperty;

var _require3 = require('../string/_replaceAll.js'),
    _replaceAll = _require3._replaceAll;

var _copyProperty = function _copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (var i = 0; i < propertyArray.length; i += 1) {
    if (propertyArray[i] === '' || _isUndefined(propertyArray[i])) {
      continue;
    }

    if (!_isString(propertyArray[i])) {
      throw new TypeError('copyProperty args(propertyArray) element is not string');
    }

    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }

  return toObject;
};

var copyProperty = function copyProperty(fromObject, propertyArray) {
  var toObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (_inProperty(fromObject, 'fromObject,propertyArray')) {
    var _fromObject = fromObject;
    fromObject = _fromObject.fromObject;
    propertyArray = _fromObject.propertyArray;
    var _fromObject$toObject = _fromObject.toObject;
    toObject = _fromObject$toObject === void 0 ? {} : _fromObject$toObject;
  }

  if (!_isObject(fromObject)) {
    throw new TypeError('copyProperty args(fromObject) is not object');
  }

  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError('copyProperty args(propertyArray) is not [array|string]');
    }
  }

  if (!_isObject(toObject)) {
    throw new TypeError('copyProperty args(toObject) is not object');
  }

  _copyProperty(fromObject, propertyArray, toObject);
};

var _propertyCount = function _propertyCount(object) {
  var result = 0;

  for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    result += 1;
  }

  return result;
};

var propertyCount = function propertyCount(object) {
  if (!_isObject(object)) {
    throw new TypeError('propertyCount args(object) is not object');
  }

  return _propertyCount(object);
};
/**
 * object.clone
 */


var _clone = function _clone(sourceObject) {
  var result = {};

  for (var _i2 = 0, _Object$entries2 = Object.entries(sourceObject); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];

    result[key] = value;
  }

  return result;
};

var clone = function clone(sourceObject) {
  if (!_isObject(sourceObject)) {
    throw new TypeError('object.clone args(sourceObject) is not object');
  }

  return _clone(sourceObject);
};

var _cloneDeep = function _cloneDeep(sourceObject) {
  var __cloneDeep = function __cloneDeep(sourceObject) {
    var result = {};

    for (var _i3 = 0, _Object$entries3 = Object.entries(sourceObject); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          key = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];

      if (_isObject(value)) {
        result[key] = __cloneDeep(value);
      } else {
        result[key] = value;
      }
    }

    return result;
  };

  return __cloneDeep(sourceObject);
};

var cloneDeep = function cloneDeep(sourceObject) {
  var destObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!_isObject(sourceObject)) {
    throw new TypeError('object.cloneDeep args(sourceObject) is not object');
  }

  return _cloneDeep(sourceObject);
};

var copyProp = copyProperty;
var propCount = propertyCount;
module.exports = {
  _copyProperty: _copyProperty,
  _propertyCount: _propertyCount,
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  copyProperty: copyProperty,
  propertyCount: propertyCount,
  clone: clone,
  cloneDeep: cloneDeep,
  copyProp: copyProp,
  propCount: propCount
};
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

var object = require('../object/object.js');

var array = require('../array/array.js');

var _copyProperty = object._copyProperty;
/**
 * root.clone
 */

var _clone = function _clone(source) {
  var __cloneObject = function __cloneObject(source) {
    var result = {};

    for (var _i = 0, _Object$entries = Object.entries(source); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      result[key] = value;
    }

    return result;
  };

  var __cloneArray = function __cloneArray(source) {
    var result = []; // for (let [index, value] of source.entries()) {

    for (var i = 0, l = source.length; i < l; i += 1) {
      var value = source[i];
      result.push(value);
    }

    return result;
  };

  if (_isObject(source)) {
    return __cloneObject(source);
  } else if (_isArray(source)) {
    return __cloneArray(source);
  }
};

var clone = function clone(source) {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError('root.clone args(source) is not [object|array]');
  }

  return _clone(source);
};
/**
 * root.cloneDeep
 */


var _cloneDeep = function _cloneDeep(source) {
  var __cloneDeepObject = function __cloneDeepObject(source) {
    var result = {};

    for (var _i2 = 0, _Object$entries2 = Object.entries(source); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      result[key] = conditionalReturn(value);
    }

    return result;
  };

  var __cloneDeepArray = function __cloneDeepArray(source) {
    var result = [];

    for (var i = 0, l = source.length; i < l; i += 1) {
      var value = source[i];
      result.push(conditionalReturn(value));
    }

    return result;
  };

  var conditionalReturn = function conditionalReturn(value) {
    if (_isObject(value)) {
      return __cloneDeepObject(value);
    } else if (_isArray(value)) {
      return __cloneDeepArray(value);
    } else {
      for (var i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
        var _cloneDeep$functions$ = _cloneDeep.functions[i](value),
            result = _cloneDeep$functions$.result,
            cloneValue = _cloneDeep$functions$.cloneValue;

        if (result) {
          return cloneValue;
        }
      }

      return value;
    }
  };

  var __cloneDeep = function __cloneDeep(source) {
    if (_isObject(source)) {
      return __cloneDeepObject(source);
    } else if (_isArray(source)) {
      return __cloneDeepArray(source);
    }

    return;
  };

  return __cloneDeep(source);
};

_cloneDeep.functions = [];

_cloneDeep.clearFunctions = function () {
  _cloneDeep.functions = [];
};

_cloneDeep.pushFunction = function (func) {
  _cloneDeep.functions.push(func);
};

_cloneDeep.dateClone = function (element) {
  return _isDate(element) ? {
    result: true,
    cloneValue: new Date(element.getTime())
  } : {
    result: false
  };
};

_cloneDeep.pushFunction(_cloneDeep.dateClone);

var cloneDeep = function cloneDeep(source) {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError('root.cloneDeep args(source) is not [object|array]');
  }

  return _cloneDeep(source);
};

_copyProperty(_cloneDeep, 'clearFunctions,pushFunction,dateClone', cloneDeep);

module.exports = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  clone: clone,
  cloneDeep: cloneDeep
};
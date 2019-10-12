"use strict";

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

    for (var key in source) {
      result[key] = source[key];
    }

    return result;
  };

  var __cloneArray = function __cloneArray(source) {
    var result = [];

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

    for (var key in source) {
      result[key] = __cloneDeep(source[key]);
    }

    return result;
  };

  var __cloneDeepArray = function __cloneDeepArray(source) {
    var result = [];

    for (var i = 0, l = source.length; i < l; i += 1) {
      var value = source[i];
      result.push(__cloneDeep(value));
    }

    return result;
  };

  var __cloneDeep = function __cloneDeep(value) {
    for (var i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      var _cloneDeep$functions$ = _cloneDeep.functions[i](value),
          result = _cloneDeep$functions$.result,
          cloneValue = _cloneDeep$functions$.cloneValue;

      if (result) {
        return cloneValue;
      }
    }

    if (_isObject(value)) {
      return __cloneDeepObject(value);
    }

    if (_isArray(value)) {
      return __cloneDeepArray(value);
    }

    return value;
  };

  return __cloneDeep(source);
};

_cloneDeep.functions = [];

_cloneDeep.clearFunctions = function () {
  _cloneDeep.functions = [];
};

_cloneDeep.addFunction = function (func) {
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

_cloneDeep.addFunction(_cloneDeep.dateClone);

var cloneDeep = function cloneDeep(source) {
  if (!(_isObject(source) || _isArray(source))) {
    throw new TypeError('root.cloneDeep args(source) is not [object|array]');
  }

  return _cloneDeep(source);
};

_copyProperty(_cloneDeep, 'clearFunctions,addFunction,dateClone', cloneDeep);

module.exports = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  clone: clone,
  cloneDeep: cloneDeep
};
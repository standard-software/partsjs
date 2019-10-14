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
    _isObjectType = _require._isObjectType,
    _isArray = _require._isArray,
    _isDate = _require._isDate,
    _isRegExp = _require._isRegExp,
    _isException = _require._isException;

var object = require('../object/object.js');

var array = require('../array/array.js');

var _copyProperty = object._copyProperty;
/**
 * cloneFunction
 */

var cloneFunction = {};

cloneFunction.objectType = function (source) {
  var __cloneDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };

  if (_isFunction(source)) {
    return {
      result: false
    };
  }

  if (!_isObjectType(source)) {
    return {
      result: false
    };
  }

  var cloneValue = new source.constructor();

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return {
    result: true,
    cloneValue: cloneValue
  };
};

cloneFunction.object = function (source) {
  var __cloneDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };

  if (!_isObject(source)) {
    return {
      result: false
    };
  }

  var cloneValue = {};

  for (var key in source) {
    cloneValue[key] = __cloneDeep(source[key]);
  }

  return {
    result: true,
    cloneValue: cloneValue
  };
};

cloneFunction.array = function (source) {
  var __cloneDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };

  if (!_isArray(source)) {
    return {
      result: false
    };
  }

  var cloneValue = [];

  for (var i = 0, l = source.length; i < l; i += 1) {
    var value = source[i];
    cloneValue.push(__cloneDeep(value));
  }

  return {
    result: true,
    cloneValue: cloneValue
  };
};

cloneFunction.date = function (source) {
  return _isDate(source) ? {
    result: true,
    cloneValue: new Date(source.getTime())
  } : {
    result: false
  };
};

cloneFunction.regExp = function (source) {
  return _isRegExp(source) ? {
    result: true,
    cloneValue: new RegExp(source.source)
  } : {
    result: false
    /**
     * root.clone
     */

  };
};

var _clone = function _clone(source) {
  var __clone = function __clone(value) {
    for (var i = 0, l = _clone.functions.length; i < l; i += 1) {
      var _clone$functions$i = _clone.functions[i](value),
          result = _clone$functions$i.result,
          cloneValue = _clone$functions$i.cloneValue;

      if (result) {
        return cloneValue;
      }
    }

    return value;
  };

  return __clone(source);
};

_clone.functions = [];

_clone.clear = function () {
  _clone.functions = [];
};

_clone.add = function (func) {
  _clone.functions.unshift(func);
};

_clone.reset = function () {
  _clone.clear();

  _clone.add(cloneFunction.objectType);

  _clone.add(cloneFunction.regExp);
};

_clone.reset();

var clone = function clone(source) {
  return _clone(source);
};

_copyProperty(_clone, 'clear,reset,add,' + '', clone);
/**
 * root.cloneDeep
 */


var _cloneDeep = function _cloneDeep(source) {
  var __cloneDeep = function __cloneDeep(value) {
    for (var i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      var _cloneDeep$functions$ = _cloneDeep.functions[i](value, __cloneDeep),
          result = _cloneDeep$functions$.result,
          cloneValue = _cloneDeep$functions$.cloneValue;

      if (result) {
        return cloneValue;
      }
    }

    return value;
  };

  return __cloneDeep(source);
};

_cloneDeep.functions = [];

_cloneDeep.clear = function (func) {
  _cloneDeep.functions = [];
};

_cloneDeep.add = function (func) {
  _cloneDeep.functions.unshift(func);
};

_cloneDeep.reset = function () {
  _cloneDeep.clear();

  _cloneDeep.add(cloneFunction.objectType);

  _cloneDeep.add(cloneFunction.regExp);
};

_cloneDeep.reset();

var cloneDeep = function cloneDeep(source) {
  return _cloneDeep(source);
};

_copyProperty(_cloneDeep, 'clear,reset,add,' + '', cloneDeep);

module.exports = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  clone: clone,
  cloneDeep: cloneDeep,
  cloneFunction: cloneFunction
};
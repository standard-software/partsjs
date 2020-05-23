"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var _require2 = require('../object/object.js'),
    _copyProperty = _require2._copyProperty;
/**
 * cloneFunction
 */


var cloneFunction = {}; // function is no clone

cloneFunction.cloneIgnoreFunction = function (source) {
  if (!isFunction(source)) {
    return undefined;
  }

  return source;
}; // support
//  user object and user arrayType
//  Just good usability


cloneFunction.cloneObject = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isObject(source)) {
    return undefined;
  }

  var cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

cloneFunction.cloneArrayType = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isArrayType(source)) {
    return undefined;
  }

  var cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);

  for (var i = 0, l = source.length; i < l; i += 1) {
    cloneValue[i] = __cloneDeep(source[i]);
  } // // Code that does the same thing
  // // for in array key is string.
  // // legacy for loop is simple for array
  // for (const key in source) {
  //   if (source.hasOwnProperty(key)) {
  //     cloneValue[key] = __cloneDeep(source[key]);
  //   }
  // }


  return cloneValue;
}; // support
//  all object
//  but Math or JSON etc clone
//  Cloning unnecessary objects


cloneFunction.cloneObjectType = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isObjectType(source)) {
    return undefined;
  }

  var cloneValue = new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
}; // // support only simple object
// cloneFunction.cloneObject = (
//   source,
//   bufferWrite = () => {},
//   __cloneDeep = value => value,
// ) => {
//   if (!isObject(source)) {
//     return undefined;
//   }
//   const cloneValue = {};
//   bufferWrite(source, cloneValue);
//   for (let key in source) {
//     cloneValue[key] = __cloneDeep(source[key]);
//   }
//   return cloneValue;
// }
// // support only simple array
// cloneFunction.cloneArray = (
//   source,
//   bufferWrite = () => {},
//   __cloneDeep = value => value,
// ) => {
//   if (!isArray(source)) {
//     return undefined;
//   }
//   const cloneValue = [];
//   bufferWrite(source, cloneValue);
//   for (let i = 0, l = source.length; i < l; i += 1) {
//     const value = source[i];
//     cloneValue.push(__cloneDeep(value))
//   }
//   return cloneValue;
// }


cloneFunction.cloneDate = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!isDate(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

cloneFunction.cloneRegExp = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!isRegExp(source)) {
    return undefined;
  }

  var cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
}; // cloneMap
//  key not recursive call
//  value recursive call


cloneFunction.cloneMap = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!isMap(source)) {
    return undefined;
  }

  var cloneValue = new Map();
  bufferWrite(source, cloneValue);

  var _iterator = _createForOfIteratorHelper(source.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      cloneValue.set(key, __cloneDeep(value));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return cloneValue;
};

cloneFunction.cloneIgnoreWeakMap = function (source) {
  if (!isWeakMap(source)) {
    return undefined;
  }

  return source;
}; // cloneSet
//  element not recursive call
//  same map key


cloneFunction.cloneSet = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!isSet(source)) {
    return undefined;
  }

  var cloneValue = new Set();
  bufferWrite(source, cloneValue);

  var _iterator2 = _createForOfIteratorHelper(source),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      cloneValue.add(value);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return cloneValue;
};

cloneFunction.cloneIgnoreWeakSet = function (source) {
  if (!isWeakSet(source)) {
    return undefined;
  }

  return source;
};
/**
 * clone
 */


var _clone = function _clone(source) {
  var __clone = function __clone(value) {
    if (isUndefined(value)) {
      return undefined;
    }

    for (var i = 0, l = _clone.functions.length; i < l; i += 1) {
      var result = _clone.functions[i](value);

      if (!isUndefined(result)) {
        return result;
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

  _clone.add(cloneFunction.cloneObject);

  _clone.add(cloneFunction.cloneArrayType);

  _clone.add(cloneFunction.cloneIgnoreWeakSet);

  _clone.add(cloneFunction.cloneSet);

  _clone.add(cloneFunction.cloneIgnoreWeakMap);

  _clone.add(cloneFunction.cloneMap);

  _clone.add(cloneFunction.cloneIgnoreFunction);

  _clone.add(cloneFunction.cloneRegExp);

  _clone.add(cloneFunction.cloneDate);
};

_clone.reset();

var clone = function clone(source) {
  return _clone(source);
};

_copyProperty(_clone, 'clear,reset,add,' + '', clone);
/**
 * cloneDeep
 */


var _cloneDeep = function _cloneDeep(source) {
  var CircularReferenceBuffer = {
    source: [],
    clone: []
  };

  var __cloneDeep = function __cloneDeep(value) {
    var index = CircularReferenceBuffer.source.indexOf(value);

    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }

    if (isUndefined(value)) {
      return undefined;
    }

    for (var i = 0, l = _cloneDeep.functions.length; i < l; i += 1) {
      var result = _cloneDeep.functions[i](value, function (source, clone) {
        CircularReferenceBuffer.source.push(source);
        CircularReferenceBuffer.clone.push(clone);
      }, __cloneDeep);

      if (!isUndefined(result)) {
        return result;
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

  _cloneDeep.add(cloneFunction.cloneObject);

  _cloneDeep.add(cloneFunction.cloneArrayType);

  _cloneDeep.add(cloneFunction.cloneIgnoreWeakSet);

  _cloneDeep.add(cloneFunction.cloneSet);

  _cloneDeep.add(cloneFunction.cloneIgnoreWeakMap);

  _cloneDeep.add(cloneFunction.cloneMap);

  _cloneDeep.add(cloneFunction.cloneIgnoreFunction);

  _cloneDeep.add(cloneFunction.cloneRegExp);

  _cloneDeep.add(cloneFunction.cloneDate);
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
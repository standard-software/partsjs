"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clone = exports._clone = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * clone
 */
var _clone = function _clone(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone.func.defaultArray;

  var __clone = function __clone(value) {
    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      var result = cloneFuncArray[i](value);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return __clone(source);
};

exports._clone = _clone;

var clone = function clone(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone.func.defaultArray;

  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? clone.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!(0, _type.isArray)(cloneFuncArray)) {
    throw new TypeError('clone args(cloneFuncArray) is not array');
  }

  return _clone(source, cloneFuncArray);
};
/**
 * clone.func
 */


exports.clone = clone;
clone.func = {}; // function is no clone

clone.func.ignoreFunction = function (source) {
  if (!(0, _type.isFunction)(source)) {
    return undefined;
  }

  return source;
}; // support
//  user object and user arrayType
//  Just good usability


clone.func.object = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isObject)(source)) {
    return undefined;
  }

  var cloneValue = (0, _type.isObjectFromNull)(source) ? Object.create(null) : new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

clone.func.arrayType = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isArrayType)(source)) {
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


clone.func.objectLike = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isObjectLike)(source)) {
    return undefined;
  }

  var cloneValue = (0, _type.isObjectFromNull)(source) ? Object.create(null) : new source.constructor();
  bufferWrite(source, cloneValue);

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      cloneValue[key] = __cloneDeep(source[key]);
    }
  }

  return cloneValue;
};

clone.func.date = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isDate)(source)) {
    return undefined;
  }

  var cloneValue = new Date(source.getTime());
  bufferWrite(source, cloneValue);
  return cloneValue;
};

clone.func.regExp = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isRegExp)(source)) {
    return undefined;
  }

  var cloneValue = new RegExp(source.source);
  bufferWrite(source, cloneValue);
  return cloneValue;
}; // cloneMap
//  key not recursive call
//  value recursive call


clone.func.map = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };

  if (!(0, _type.isMap)(source)) {
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

clone.func.ignoreWeakMap = function (source) {
  if (!(0, _type.isWeakMap)(source)) {
    return undefined;
  }

  return source;
}; // cloneSet
//  element not recursive call
//  same map key


clone.func.set = function (source) {
  var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  if (!(0, _type.isSet)(source)) {
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

clone.func.ignoreWeakSet = function (source) {
  if (!(0, _type.isWeakSet)(source)) {
    return undefined;
  }

  return source;
};

clone.func.defaultArray = [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.map, clone.func.ignoreWeakMap, clone.func.set, clone.func.ignoreWeakSet, clone.func.arrayType, clone.func.object];
var _default = {
  _clone: _clone,
  clone: clone
};
exports["default"] = _default;
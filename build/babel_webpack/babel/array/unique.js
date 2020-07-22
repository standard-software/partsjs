"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unique = exports._unique = exports.__unique = void 0;

var _type = require("../type/type.js");

var _syntax = require("../syntax/syntax.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * uniqe
 */
var __unique = function __unique(array) {
  if ((0, _syntax.canUseSet)() && array.length > 120) {
    return _toConsumableArray(new Set(array));
  } else {
    var result = [];

    for (var i = 0, l = array.length; i < l; i += 1) {
      if (result.indexOf(array[i]) === -1) {
        result.push(array[i]);
      }
    }

    return result;
  } // node.js v8
  // It is faster to use Set
  // when the array.lentgh is larger than about 120

};

exports.__unique = __unique;

var defaultUniqueFunc = function defaultUniqueFunc(v) {
  return v;
};

var _unique = function _unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultUniqueFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (func === defaultUniqueFunc) {
    if (detail === false) {
      return __unique(array);
    }
  }

  var index = [];
  var result = [];
  array.forEach(function (v) {
    var funcResult = func(v);
    var i = index.indexOf(funcResult);

    if (i === -1) {
      index.push(funcResult);
      result.push(v);
    }
  });
  func = undefined;

  if (detail) {
    return {
      index: index,
      result: result
    };
  }

  return result;
};

exports._unique = _unique;

var unique = function unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultUniqueFunc;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? defaultUniqueFunc : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? defaultUniqueFunc : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('unique args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('group args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('group args(detail) is not boolean');
  }

  if (detail && func === defaultUniqueFunc) {
    throw new TypeError('group args(detail) is true and args(func) must be function');
  }

  return _unique(array, func, detail);
};

exports.unique = unique;
var _default = {
  __unique: __unique,
  _unique: _unique,
  unique: unique
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unique = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _includes = require("../compare/__includes.js");

var _returnValueFunction = require("../common/returnValueFunction.js");

var _unique2 = require("../array/_unique.js");

/**
 * uniqe
 */
var unique = function unique(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnValueFunction.returnValueFunction : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.returnValueFunction : _func$func;
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

  return (0, _unique2._unique)(array, func, detail);
};

exports.unique = unique;
var _default = {
  unique: unique
};
exports["default"] = _default;
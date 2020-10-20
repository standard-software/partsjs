"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.min = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _returnValueFunction = require("../common/__returnValueFunction.js");

var _min2 = require("../array/_min.js");

/**
 * array.min
 */
var min = function min(array) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'func, detail')) {
    var _array = array;
    array = _array.array;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _returnValueFunction.__returnValueFunction : _array$func;
    var _array$detail = _array.detail;
    detail = _array$detail === void 0 ? false : _array$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, '', 'func, detail')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.__returnValueFunction : _func$func;
    var _func$detail = _func.detail;
    detail = _func$detail === void 0 ? false : _func$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('min args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('min args(func) is not function');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('min args(detail) is not boolean');
  }

  return (0, _min2._min)(array, func, detail);
};

exports.min = min;
var _default = {
  min: min
};
exports["default"] = _default;
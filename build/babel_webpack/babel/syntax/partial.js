"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.partial = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _partial2 = require("../syntax/_partial.js");

var partial = function partial(func, applyArgs) {
  if ((0, _isObjectParameter.isObjectParameter)(func, 'func, applyArgs')) {
    var _func = func;
    func = _func.func;
    applyArgs = _func.applyArgs;
  } else if ((0, _isObjectParameter.isObjectParameter)(applyArgs, 'applyArgs')) {
    var _applyArgs = applyArgs;
    applyArgs = _applyArgs.applyArgs;
  }

  if (!(0, _isType.isFunction)(func)) {
    throw new TypeError("partial args(func:".concat(func, ") is not function"));
  }

  if (!(0, _isType.isArray)(applyArgs)) {
    throw new TypeError("partial args(applyArgs:".concat(applyArgs, ") is not array"));
  }

  return (0, _partial2._partial)(func, applyArgs);
};

exports.partial = partial;
partial.empty = _partial2._partial.empty;
var _default = {
  partial: partial
};
exports["default"] = _default;
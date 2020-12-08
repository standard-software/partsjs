"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.merge = void 0;

var _isType = require("../type/isType.js");

var _isTypeArray = require("../type/isTypeArray.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _returnValueFunction = require("./__returnValueFunction.js");

var _merge2 = require("../common/_merge.js");

/**
 * merge
 */
var merge = function merge(source, targetArray, func) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source, targetArray', 'func')) {
    var _source = source;
    source = _source.source;
    targetArray = _source.targetArray;
    func = _source.func;
  } else if ((0, _isObjectParameter.isObjectParameter)(targetArray, 'targetArray', 'func')) {
    var _targetArray = targetArray;
    targetArray = _targetArray.targetArray;
    func = _targetArray.func;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func')) {
    var _func = func;
    func = _func.func;
  }

  if (!((0, _isType.isObject)(source) || (0, _isType.isArray)(source))) {
    throw new TypeError('merge args(source) is not [Object|Array]');
  }

  if (!(0, _isType.isArray)(targetArray)) {
    throw new TypeError('merge args(targetArray) is not array');
  }

  if (!(targetArray.length === 0 || (0, _isTypeArray.isObjectArray)(targetArray) || (0, _isTypeArray.isArrayArray)(targetArray))) {
    throw new TypeError('merge args(targetArray) element is not [Object|Array]');
  }

  if (!((0, _isType.isUndefined)(func) || (0, _isType.isFunction)(func))) {
    throw new TypeError('merge args(func) is not function');
  }

  return (0, _merge2._merge)(source, targetArray, func);
};

exports.merge = merge;
var _default = {
  merge: merge
};
exports["default"] = _default;
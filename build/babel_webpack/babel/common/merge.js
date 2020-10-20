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
var merge = function merge(dataArray) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _returnValueFunction.__returnValueFunction;
  var target = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(dataArray, 'dataArray, func', 'target')) {
    var _dataArray = dataArray;
    dataArray = _dataArray.dataArray;
    var _dataArray$func = _dataArray.func;
    func = _dataArray$func === void 0 ? _returnValueFunction.__returnValueFunction : _dataArray$func;
    target = _dataArray.target;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func', 'target')) {
    var _func = func;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _returnValueFunction.__returnValueFunction : _func$func;
    target = _func.target;
  } else if ((0, _isObjectParameter.isObjectParameter)(target, 'target')) {
    var _target = target;
    target = _target.target;
  }

  if (!(0, _isType.isArray)(dataArray)) {
    throw new TypeError('merge args(dataArray) is not array');
  }

  if (!(dataArray.length === 0 || (0, _isTypeArray.isObjectLikeArray)(dataArray) || (0, _isTypeArray.isArraySeriesArray)(dataArray))) {
    throw new TypeError('merge args(dataArray) element is not [ObjectLike|ArraySeries]');
  }

  if (!(0, _isType.isFunction)(func)) {
    throw new TypeError('merge args(func) is not function');
  }

  if (!((0, _isType.isUndefined)(target) || (0, _isType.isObjectLike)(target) || (0, _isType.isArraySeries)(target))) {
    throw new TypeError('merge args(target) is not [undefined|ObjectLike|ArraySeries]');
  }

  return (0, _merge2._merge)(dataArray, func, target);
};

exports.merge = merge;
var _default = {
  merge: merge
};
exports["default"] = _default;
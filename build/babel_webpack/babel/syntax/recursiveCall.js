"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.recursiveCall = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _recursiveCall2 = require("../syntax/_recursiveCall.js");

var recursiveCall = function recursiveCall(source, callFunc, runFunc) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source, callFunc, runFunc')) {
    var _source = source;
    source = _source.source;
    callFunc = _source.callFunc;
    runFunc = _source.runFunc;
  } else if ((0, _isObjectParameter.isObjectParameter)(callFunc, 'callFunc, runFunc')) {
    var _callFunc = callFunc;
    callFunc = _callFunc.callFunc;
    runFunc = _callFunc.runFunc;
  } else if ((0, _isObjectParameter.isObjectParameter)(runFunc, 'runFunc')) {
    var _runFunc = runFunc;
    runFunc = _runFunc.runFunc;
  }

  if (!((0, _isType.isObject)(source) || (0, _isType.isArray)(source))) {
    throw new TypeError('recursiveCall args source is not [object|array]');
  }

  if (!(0, _isType.isFunction)(callFunc)) {
    throw new TypeError('recursiveCall args callFunc is not function');
  }

  if (!(0, _isType.isFunction)(runFunc)) {
    throw new TypeError('recursiveCall args runFunc is not function');
  }

  return (0, _recursiveCall2._recursiveCall)(source, callFunc, runFunc);
};

exports.recursiveCall = recursiveCall;
var _default = {
  recursiveCall: recursiveCall
};
exports["default"] = _default;
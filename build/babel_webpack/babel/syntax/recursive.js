"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.recursive = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _recursive2 = require("../syntax/_recursive.js");

var recursive = function recursive(source, func) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source, func')) {
    var _source = source;
    source = _source.source;
    func = _source.func;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func')) {
    var _func = func;
    func = _func.func;
  }

  if (!((0, _isType.isObject)(source) || (0, _isType.isArray)(source))) {
    throw new TypeError('recursive args source is not [object|array]');
  }

  if (!(0, _isType.isFunction)(func)) {
    throw new TypeError('recursive args func is not function');
  }

  return (0, _recursive2._recursive)(source, func);
};

exports.recursive = recursive;
var _default = {
  recursive: recursive
};
exports["default"] = _default;
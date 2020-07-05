"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clone = exports._clone = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _cloneFunction = require("../root/cloneFunction.js");

/**
 * clone
 */
var _clone = function _clone(source) {
  var cloneFunctionArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _cloneFunction.cloneFunctionArrayDefault;

  var __clone = function __clone(value) {
    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFunctionArray.length; i < l; i += 1) {
      var result = cloneFunctionArray[i](value);

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
  var cloneFunctionArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _cloneFunction.cloneFunctionArrayDefault;

  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFunctionArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFunction = _source.cloneFunctionArray;
    cloneFunctionArray = _source$cloneFunction === void 0 ? _cloneFunction.cloneFunctionArrayDefault : _source$cloneFunction;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFunctionArray, 'cloneFunctionArray')) {
    var _cloneFunctionArray = cloneFunctionArray;
    cloneFunctionArray = _cloneFunctionArray.cloneFunctionArray;
  }

  if (!(0, _type.isArray)(cloneFunctionArray)) {
    throw new TypeError('clone args(cloneFunctionArray) is not array');
  }

  return _clone(source, cloneFunctionArray);
};

exports.clone = clone;
var _default = {
  _clone: _clone,
  clone: clone
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = exports._cloneDeep = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _cloneFunction = require("../root/cloneFunction.js");

/**
 * cloneDeep
 */
var _cloneDeep = function _cloneDeep(source) {
  var cloneFunctionArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _cloneFunction.cloneFunctionArrayDefault;
  var CircularReferenceBuffer = {
    source: [],
    clone: []
  };

  var __cloneDeep = function __cloneDeep(value) {
    var index = CircularReferenceBuffer.source.indexOf(value);

    if (index !== -1) {
      return CircularReferenceBuffer.clone[index];
    }

    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFunctionArray.length; i < l; i += 1) {
      var result = cloneFunctionArray[i](value, function (source, clone) {
        CircularReferenceBuffer.source.push(source);
        CircularReferenceBuffer.clone.push(clone);
      }, __cloneDeep);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return __cloneDeep(source);
};

exports._cloneDeep = _cloneDeep;

var cloneDeep = function cloneDeep(source) {
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
    throw new TypeError('cloneDeep args(cloneFunctionArray) is not array');
  }

  return _cloneDeep(source, cloneFunctionArray);
};

exports.cloneDeep = cloneDeep;
var _default = {
  _cloneDeep: _cloneDeep,
  cloneDeep: cloneDeep
};
exports["default"] = _default;
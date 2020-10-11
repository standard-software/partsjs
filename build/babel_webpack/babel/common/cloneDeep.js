"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = exports._cloneDeep = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _clone = require("../common/clone.js");

/**
 * cloneDeep
 */
var _cloneDeep = function _cloneDeep(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _clone.clone.func.defaultArray;
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

    for (var i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      var result = cloneFuncArray[i](value, function (source, clone) {
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
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _clone.clone.func.defaultArray;

  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? _clone.clone.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!(0, _type.isArray)(cloneFuncArray)) {
    throw new TypeError('cloneDeep args(cloneFuncArray) is not array');
  }

  return _cloneDeep(source, cloneFuncArray);
};

exports.cloneDeep = cloneDeep;
var _default = {
  _cloneDeep: _cloneDeep,
  cloneDeep: cloneDeep
};
exports["default"] = _default;
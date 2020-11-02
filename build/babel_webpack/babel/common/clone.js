"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clone = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _clone2 = require("../common/_clone.js");

var _cloneFunc = require("../common/__cloneFunc.js");

/**
 * clone
 */
var clone = function clone(source, cloneFuncArray) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? clone.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!((0, _type.isUndefined)(cloneFuncArray) || (0, _type.isArray)(cloneFuncArray))) {
    throw new TypeError('clone args(cloneFuncArray) is not array');
  }

  return (0, _clone2._clone)(source, cloneFuncArray);
};

exports.clone = clone;
clone.func = _cloneFunc.__cloneFunc;
var _default = {
  clone: clone
};
exports["default"] = _default;
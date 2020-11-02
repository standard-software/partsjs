"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cloneDeep = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _cloneDeep2 = require("../common/_cloneDeep.js");

var _cloneFunc = require("../common/__cloneFunc.js");

var cloneDeep = function cloneDeep(source, cloneFuncArray) {
  if ((0, _isObjectParameter.isObjectParameter)(source, 'source', 'cloneFuncArray')) {
    var _source = source;
    source = _source.source;
    var _source$cloneFuncArra = _source.cloneFuncArray;
    cloneFuncArray = _source$cloneFuncArra === void 0 ? cloneDeep.func.defaultArray : _source$cloneFuncArra;
  } else if ((0, _isObjectParameter.isObjectParameter)(cloneFuncArray, 'cloneFuncArray')) {
    var _cloneFuncArray = cloneFuncArray;
    cloneFuncArray = _cloneFuncArray.cloneFuncArray;
  }

  if (!((0, _type.isUndefined)(cloneFuncArray) || (0, _type.isArray)(cloneFuncArray))) {
    throw new TypeError('cloneDeep args(cloneFuncArray) is not array');
  }

  return (0, _cloneDeep2._cloneDeep)(source, cloneFuncArray);
};

exports.cloneDeep = cloneDeep;
cloneDeep.func = _cloneFunc.__cloneFunc;
var _default = {
  cloneDeep: cloneDeep
};
exports["default"] = _default;
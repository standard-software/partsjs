"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._cloneDeep = void 0;

var _type = require("../type/type.js");

var _cloneDeep2 = require("../common/__cloneDeep.js");

var _cloneFunc = require("../common/__cloneFunc.js");

/**
 * cloneDeep
 */
var _cloneDeep = function _cloneDeep(source) {
  var cloneFuncArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _cloneFunc.__cloneFunc.defaultArray;

  if ((0, _type.isUndefined)(cloneFuncArray)) {
    return (0, _cloneDeep2.__cloneDeep)(source);
  }

  var CircularReferenceBuffer = {
    source: [],
    clone: []
  };

  var _cloneDeep_ = function _cloneDeep_(value) {
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
      }, _cloneDeep_);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return _cloneDeep_(source);
};

exports._cloneDeep = _cloneDeep;
_cloneDeep.func = _cloneFunc.__cloneFunc;
var _default = {
  _cloneDeep: _cloneDeep
};
exports["default"] = _default;
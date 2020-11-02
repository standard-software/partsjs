"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._clone = void 0;

var _type = require("../type/type.js");

var _hasOwn2 = require("../object/_hasOwn.js");

var _clone2 = require("../common/__clone.js");

var _cloneDeep2 = require("../common/_cloneDeep.js");

var _cloneFunc = require("../common/__cloneFunc.js");

/**
 * clone
 */
var _clone = function _clone(source, cloneFuncArray) {
  if ((0, _type.isUndefined)(cloneFuncArray)) {
    return (0, _clone2.__clone)(source, false);
  }

  var _clone_ = function _clone_(value) {
    if ((0, _type.isUndefined)(value)) {
      return undefined;
    }

    for (var i = 0, l = cloneFuncArray.length; i < l; i += 1) {
      var result = cloneFuncArray[i](value);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return value;
  };

  return _clone_(source);
};

exports._clone = _clone;
_clone.func = _cloneFunc.__cloneFunc;
var _default = {
  _clone: _clone
};
exports["default"] = _default;
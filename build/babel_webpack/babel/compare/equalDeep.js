"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports._equalDeep = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _equal = require("../compare/equal.js");

/**
 * equalDeep
 */
var _equalDeep = function _equalDeep(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equal.equal.func.defaultArray;
  var CircularReferenceBuffer = {
    v1Array: [],
    v2Array: []
  };

  var __equalDeep = function __equalDeep(value1, value2) {
    var index = CircularReferenceBuffer.v1Array.indexOf(value1);

    if (index !== -1) {
      if (CircularReferenceBuffer.v2Array[index] === value2) {
        return true;
      }

      return value1 === value2;
    }

    for (var i = 0, l = equalFuncArray.length; i < l; i += 1) {
      var result = equalFuncArray[i](value1, value2, function (v1, v2) {
        CircularReferenceBuffer.v1Array.push(v1);
        CircularReferenceBuffer.v2Array.push(v2);
      }, __equalDeep);

      if (!(0, _type.isUndefined)(result)) {
        return result;
      }
    }

    return false;
  };

  return __equalDeep(value1, value2);
};

exports._equalDeep = _equalDeep;

var equalDeep = function equalDeep(value1, value2) {
  var equalFuncArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equal.equal.func.defaultArray;

  if ((0, _object.isObjectParameter)(value1, 'value1, value2', 'equalFuncArray')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    var _value$equalFuncArray = _value.equalFuncArray;
    equalFuncArray = _value$equalFuncArray === void 0 ? _equal.equal.func.defaultArray : _value$equalFuncArray;
  } else if ((0, _object.isObjectParameter)(value2, 'value2', 'equalFuncArray')) {
    var _value2 = value2;
    value2 = _value2.value2;
    var _value2$equalFuncArra = _value2.equalFuncArray;
    equalFuncArray = _value2$equalFuncArra === void 0 ? _equal.equal.func.defaultArray : _value2$equalFuncArra;
  } else if ((0, _object.isObjectParameter)(equalFuncArray, 'equalFuncArray')) {
    var _equalFuncArray = equalFuncArray;
    equalFuncArray = _equalFuncArray.equalFuncArray;
  }

  return _equalDeep(value1, value2, equalFuncArray);
};

exports.equalDeep = equalDeep;
var _default = {
  _equalDeep: _equalDeep,
  equalDeep: equalDeep
};
exports["default"] = _default;
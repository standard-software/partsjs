"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports._equalDeep = void 0;

var _type = require("../type/type.js");

var _object = require("../object/object.js");

var _equalFunction = require("../compare/equalFunction.js");

/**
 * equalDeep
 */
var _equalDeep = function _equalDeep(value1, value2) {
  var equalFunctionArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equalFunction.equalFunctionArrayDefault;
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

    for (var i = 0, l = equalFunctionArray.length; i < l; i += 1) {
      var result = equalFunctionArray[i](value1, value2, function (v1, v2) {
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
  var equalFunctionArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _equalFunction.equalFunctionArrayDefault;

  if ((0, _object.isObjectParameter)(value1, 'value1, value2', 'equalFunctionArray')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    var _value$equalFunctionA = _value.equalFunctionArray;
    equalFunctionArray = _value$equalFunctionA === void 0 ? _equalFunction.equalFunctionArrayDefault : _value$equalFunctionA;
  } else if ((0, _object.isObjectParameter)(value2, 'value2', 'equalFunctionArray')) {
    var _value2 = value2;
    value2 = _value2.value2;
    var _value2$equalFunction = _value2.equalFunctionArray;
    equalFunctionArray = _value2$equalFunction === void 0 ? _equalFunction.equalFunctionArrayDefault : _value2$equalFunction;
  } else if ((0, _object.isObjectParameter)(equalFunctionArray, 'equalFunctionArray')) {
    var _equalFunctionArray = equalFunctionArray;
    equalFunctionArray = _equalFunctionArray.equalFunctionArray;
  }

  return _equalDeep(value1, value2, equalFunctionArray);
};

exports.equalDeep = equalDeep;
var _default = {
  _equalDeep: _equalDeep,
  equalDeep: equalDeep
};
exports["default"] = _default;
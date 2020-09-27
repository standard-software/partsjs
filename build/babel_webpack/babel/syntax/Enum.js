"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Enum = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _Enum2 = require("../syntax/_Enum.js");

/* eslint-disable no-invalid-this */

/**
 * Enum
 */
var Enum = function Enum(values) {
  var useIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if ((0, _isObjectParameter.isObjectParameter)(values, 'values', 'useIndex')) {
    var _values = values;
    values = _values.values;
    var _values$useIndex = _values.useIndex;
    useIndex = _values$useIndex === void 0 ? false : _values$useIndex;
  } else if ((0, _isObjectParameter.isObjectParameter)(useIndex, 'useIndex')) {
    var _useIndex = useIndex;
    useIndex = _useIndex.useIndex;
  }

  if (!(0, _type.isStringArray)(values)) {
    throw new TypeError('Enum args(values) is not string array');
  }

  if (!(0, _type.isBoolean)(useIndex)) {
    throw new TypeError('Enum args(useIndex) is not boolean');
  }

  return (0, _Enum2._Enum)(values, useIndex);
};

exports.Enum = Enum;
var _default = {
  _Enum: _Enum2._Enum,
  Enum: Enum
};
exports["default"] = _default;
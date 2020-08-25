"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Enum = exports._Enum = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/* eslint-disable no-invalid-this */

/**
 * Enum
 */
var _Enum = function _Enum(values) {
  var useIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!(this instanceof _Enum)) {
    return new _Enum(values, useIndex);
  }

  if (useIndex === false) {
    for (var i = 0, l = values.length; i < l; i += 1) {
      this[values[i]] = values[i];
    }
  } else {
    for (var _i = 0, _l = values.length; _i < _l; _i += 1) {
      this[values[_i]] = _i;
    }
  }
};

exports._Enum = _Enum;

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

  if (!(0, _type.isArray)(values)) {
    throw new TypeError('Enum args(values) is not array');
  }

  if (!(0, _type.isBoolean)(useIndex)) {
    throw new TypeError('Enum args(useIndex) is not boolean');
  }

  return _Enum(values, useIndex);
};

exports.Enum = Enum;
var _default = {
  _Enum: _Enum,
  Enum: Enum
};
exports["default"] = _default;
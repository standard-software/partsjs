"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Enum = void 0;

/**
 * Enum
 */
var _Enum = function _Enum(values) {
  var useIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var self = {};

  if (useIndex === false) {
    for (var i = 0, l = values.length; i < l; i += 1) {
      self[values[i]] = values[i];
    }
  } else {
    for (var _i = 0, _l = values.length; _i < _l; _i += 1) {
      self[values[_i]] = _i;
    }
  }

  return self;
};

exports._Enum = _Enum;
var _default = {
  _Enum: _Enum
};
exports["default"] = _default;
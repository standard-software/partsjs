"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _primitiveTypeCheckFunc = function _primitiveTypeCheckFunc(typeName) {
  return function (value) {
    return _typeof(value) === typeName;
  };
};

var _isUndefined = _primitiveTypeCheckFunc('undefined');

module.exports = {
  _primitiveTypeCheckFunc: _primitiveTypeCheckFunc,
  _isUndefined: _isUndefined
};
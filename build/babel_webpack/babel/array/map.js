"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.map = void 0;

var _type = require("../type/type.js");

var _map2 = require("./_map.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * map
 */
var map = function map(array, func) {
  if ((0, _isObjectParameter.isObjectParameter)(array, 'array, func')) {
    var _array = array;
    array = _array.array;
    func = _array.func;
  }

  if (!(0, _type.isArray)(array)) {
    throw new TypeError('map args(array) is not array');
  }

  if (!(0, _type.isFunction)(func)) {
    throw new TypeError('map args(productFunc) is not function');
  }

  return (0, _map2._map)(array, func);
};

exports.map = map;
var _default = {
  map: map
};
exports["default"] = _default;
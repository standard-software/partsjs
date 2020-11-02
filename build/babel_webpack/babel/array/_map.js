"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._map = void 0;

/**
 * map
 */
var _map = function _map(array, func) {
  var result = [];

  for (var i = 0, l = array.length; i < l; i += 1) {
    var resultFunc = func(array[i], i, array);
    result.push(resultFunc);
  }

  return result;
};

exports._map = _map;
var _default = {
  _map: _map
};
exports["default"] = _default;
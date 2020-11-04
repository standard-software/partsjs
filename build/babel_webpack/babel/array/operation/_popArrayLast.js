"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popArrayLast = void 0;

/**
 * array.operation.popArrayLast
 */
var _popArrayLast = function _popArrayLast(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.splice(array.length - length, length);
};

exports._popArrayLast = _popArrayLast;
var _default = {
  _popArrayLast: _popArrayLast
};
exports["default"] = _default;
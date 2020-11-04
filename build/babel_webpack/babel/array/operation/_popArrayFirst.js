"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._popArrayFirst = void 0;

/**
 * array.operation.popArrayFirst
 */
var _popArrayFirst = function _popArrayFirst(array) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return array.splice(0, length);
};

exports._popArrayFirst = _popArrayFirst;
var _default = {
  _popArrayFirst: _popArrayFirst
};
exports["default"] = _default;
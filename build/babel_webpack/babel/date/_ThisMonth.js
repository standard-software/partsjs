"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._ThisMonth = void 0;

var _ThisMonth = function _ThisMonth() {
  var isLocal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var now = new Date();

  if (isLocal) {
    return new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
  } else {
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0));
  }
};

exports._ThisMonth = _ThisMonth;
var _default = {
  _ThisMonth: _ThisMonth
};
exports["default"] = _default;
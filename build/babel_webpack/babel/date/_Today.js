"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Today = void 0;

var _Today = function _Today() {
  var isLocal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var now = new Date();

  if (isLocal) {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  } else {
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
  }
};

exports._Today = _Today;
var _default = {
  _Today: _Today
};
exports["default"] = _default;
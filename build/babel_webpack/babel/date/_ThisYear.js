"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._ThisYear = void 0;

var _ThisYear = function _ThisYear() {
  var isLocal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var now = new Date();

  if (isLocal) {
    return new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
  } else {
    return new Date(Date.UTC(now.getUTCFullYear(), 0, 1, 0, 0, 0, 0));
  }
};

exports._ThisYear = _ThisYear;
var _default = {
  _ThisYear: _ThisYear
};
exports["default"] = _default;
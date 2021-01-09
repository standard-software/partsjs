"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__monthNames = void 0;

/**
 * nameOfMonth.names
 */
var __monthNames = {};
exports.__monthNames = __monthNames;

__monthNames.EnglishChar3 = function () {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
};

__monthNames.EnglishChar4 = function () {
  return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
};

__monthNames.EnglishLong = function () {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
};

var _default = {
  __monthNames: __monthNames
};
exports["default"] = _default;